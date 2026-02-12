import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'home_view_model.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final viewModel = Provider.of<HomeViewModel>(context);

    return Scaffold(
      appBar: AppBar(title: const Text('TaskTimer')),
      body: Padding(
        padding: const EdgeInsets.all(24.0),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            if (!viewModel.isRunning) ...[
              TextField(
                decoration: const InputDecoration(
                  labelText: 'What are you working on?',
                  hintText: 'e.g., Study Math',
                  prefixIcon: Icon(Icons.edit),
                ),
                onChanged: viewModel.setTaskName,
                onSubmitted: (_) => viewModel.getAiSuggestion(),
              ),
              const SizedBox(height: 10),
              if (viewModel.isAiLoading) const LinearProgressIndicator(),
              const SizedBox(height: 20),
              Wrap(
                spacing: 10,
                children: [
                  ActionChip(
                    label: const Text('10m'),
                    onPressed: () =>
                        viewModel.setDuration(const Duration(minutes: 10)),
                  ),
                  ActionChip(
                    label: const Text('25m'),
                    onPressed: () =>
                        viewModel.setDuration(const Duration(minutes: 25)),
                  ),
                  ActionChip(
                    label: const Text('45m'),
                    onPressed: () =>
                        viewModel.setDuration(const Duration(minutes: 45)),
                  ),
                ],
              ),
            ],
            const Spacer(),
            Text(
              _formatDuration(viewModel.remainingTime),
              style: Theme.of(context).textTheme.displayLarge?.copyWith(
                fontWeight: FontWeight.bold,
                fontFeatures: [const FontFeature.tabularFigures()],
              ),
            ),
            const SizedBox(height: 10),
            Text(
              viewModel.isRunning
                  ? 'Focusing on: ${viewModel.taskName}'
                  : 'Ready to focus',
              style: Theme.of(context).textTheme.titleMedium,
            ),
            const Spacer(),
            SizedBox(
              width: double.infinity,
              height: 60,
              child: FilledButton.icon(
                onPressed: viewModel.isRunning
                    ? viewModel.pauseTimer
                    : viewModel.startTimer,
                icon: Icon(
                  viewModel.isRunning ? Icons.pause : Icons.play_arrow,
                ),
                label: Text(
                  viewModel.isRunning ? 'PAUSE' : 'START TIMER',
                  style: const TextStyle(fontSize: 18),
                ),
              ),
            ),
            if (viewModel.isRunning)
              TextButton(
                onPressed: viewModel.resetTimer,
                child: const Text('RESET'),
              ),
          ],
        ),
      ),
    );
  }

  String _formatDuration(Duration duration) {
    String twoDigits(int n) => n.toString().padLeft(2, '0');
    final minutes = twoDigits(duration.inMinutes.remainder(60));
    final seconds = twoDigits(duration.inSeconds.remainder(60));
    return '${duration.inHours > 0 ? '${twoDigits(duration.inHours)}:' : ''}$minutes:$seconds';
  }
}
