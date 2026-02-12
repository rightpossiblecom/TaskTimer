import 'package:flutter/material.dart';

class AboutScreen extends StatelessWidget {
  const AboutScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('About')),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            const Icon(Icons.timer, size: 80, color: Colors.teal),
            const SizedBox(height: 20),
            Text(
              'TaskTimer',
              style: Theme.of(context).textTheme.headlineMedium,
            ),
            const SizedBox(height: 10),
            Text('Version 1.0.0', style: Theme.of(context).textTheme.bodyLarge),
            const SizedBox(height: 20),
            const Text('Simple, focused task timing.'),
            const SizedBox(height: 40),
            const Text('Created by Olumide'),
          ],
        ),
      ),
    );
  }
}
