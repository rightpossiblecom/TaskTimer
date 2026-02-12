import 'dart:convert';
import 'package:flutter/foundation.dart';
import 'package:hive_flutter/hive_flutter.dart';
import '../../core/constants/app_constants.dart';
import 'history_model.dart';

class HistoryViewModel extends ChangeNotifier {
  List<HistoryItem> _items = [];
  List<HistoryItem> get items => _items;

  HistoryViewModel() {
    _loadHistory();
  }

  void _loadHistory() {
    final box = Hive.box<String>(AppConstants.hiveBoxHistory);
    _items = box.values.map((e) {
      final Map<String, dynamic> map = jsonDecode(e);
      return HistoryItem.fromJson(map);
    }).toList();
    // Sort by newest first
    _items.sort((a, b) => b.timestamp.compareTo(a.timestamp));
    notifyListeners();
  }

  Future<void> addHistoryItem(HistoryItem item) async {
    final box = Hive.box<String>(AppConstants.hiveBoxHistory);
    await box.add(jsonEncode(item.toJson()));
    _loadHistory();
  }

  Future<void> clearHistory() async {
    final box = Hive.box<String>(AppConstants.hiveBoxHistory);
    await box.clear();
    _loadHistory();
  }
}
