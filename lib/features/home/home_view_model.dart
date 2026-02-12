import 'dart:async';
import 'package:flutter/material.dart';
import '../../core/services/ai_service.dart';
import '../../core/services/notification_service.dart';

class HomeViewModel extends ChangeNotifier {
  final AiService _aiService = AiService();
  final NotificationService _notificationService =
      NotificationService(); // Should be injected in real app

  String _taskName = '';
  Duration _initialDuration = const Duration(minutes: 25);
  Duration _remainingTime = const Duration(minutes: 25);
  Timer? _timer;
  bool _isRunning = false;
  bool _isAiLoading = false;

  String get taskName => _taskName;
  Duration get remainingTime => _remainingTime;
  Duration get initialDuration => _initialDuration;
  bool get isRunning => _isRunning;
  bool get isAiLoading => _isAiLoading;

  void setTaskName(String name) {
    _taskName = name;
    notifyListeners();
  }

  void setDuration(Duration duration) {
    _initialDuration = duration;
    _remainingTime = duration;
    notifyListeners();
  }

  Future<void> getAiSuggestion() async {
    if (_taskName.isEmpty) return;

    _isAiLoading = true;
    notifyListeners();

    try {
      final suggestion = await _aiService.generateDurationSuggestion(_taskName);
      if (suggestion != null) {
        final minutes = int.tryParse(suggestion);
        if (minutes != null) {
          setDuration(Duration(minutes: minutes));
        }
      }
    } catch (e) {
      debugPrint('AI Error: $e');
    } finally {
      _isAiLoading = false;
      notifyListeners();
    }
  }

  void startTimer() {
    if (_timer != null) return;

    _isRunning = true;
    notifyListeners();

    _timer = Timer.periodic(const Duration(seconds: 1), (timer) {
      if (_remainingTime.inSeconds > 0) {
        _remainingTime = _remainingTime - const Duration(seconds: 1);
        notifyListeners();
      } else {
        _completeTimer();
      }
    });
  }

  void pauseTimer() {
    _timer?.cancel();
    _timer = null;
    _isRunning = false;
    notifyListeners();
  }

  void resetTimer() {
    pauseTimer();
    _remainingTime = _initialDuration;
    notifyListeners();
  }

  void _completeTimer() {
    pauseTimer();
    _notificationService.showNotification(
      title: 'Time\'s up!',
      body: 'Review your task: $_taskName',
    );
    // TODO: Add to History via HistoryViewModel or Hive directly
  }
}
