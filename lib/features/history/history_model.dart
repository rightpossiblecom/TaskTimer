class HistoryItem {
  final String taskName;
  final int durationSeconds;
  final DateTime timestamp;

  HistoryItem({
    required this.taskName,
    required this.durationSeconds,
    required this.timestamp,
  });

  Map<String, dynamic> toJson() {
    return {
      'taskName': taskName,
      'durationSeconds': durationSeconds,
      'timestamp': timestamp.toIso8601String(),
    };
  }

  factory HistoryItem.fromJson(Map<String, dynamic> json) {
    return HistoryItem(
      taskName: json['taskName'],
      durationSeconds: json['durationSeconds'],
      timestamp: DateTime.parse(json['timestamp']),
    );
  }
}
