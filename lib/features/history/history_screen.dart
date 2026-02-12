import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:intl/intl.dart';
import 'history_view_model.dart';

class HistoryScreen extends StatelessWidget {
  const HistoryScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('History')),
      body: Consumer<HistoryViewModel>(
        builder: (context, viewModel, child) {
          if (viewModel.items.isEmpty) {
            return const Center(child: Text('No history yet. Start a task!'));
          }
          return ListView.builder(
            itemCount: viewModel.items.length,
            itemBuilder: (context, index) {
              final item = viewModel.items[index];
              final durationMinutes = (item.durationSeconds / 60).round();

              return ListTile(
                leading: const Icon(Icons.check_circle_outline),
                title: Text(item.taskName),
                subtitle: Text(
                  DateFormat.yMMMd().add_jm().format(item.timestamp),
                ),
                trailing: Text('$durationMinutes min'),
              );
            },
          );
        },
      ),
    );
  }
}
