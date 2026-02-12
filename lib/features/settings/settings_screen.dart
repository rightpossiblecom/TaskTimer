import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'settings_view_model.dart';
import '../about/about_screen.dart';
import '../history/history_view_model.dart';

class SettingsScreen extends StatelessWidget {
  const SettingsScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Settings')),
      body: ListView(
        children: [
          Consumer<SettingsViewModel>(
            builder: (context, viewModel, child) {
              return SwitchListTile(
                title: const Text('Dark Mode'),
                value: viewModel.themeMode == ThemeMode.dark,
                onChanged: (value) {
                  viewModel.setThemeMode(
                    value ? ThemeMode.dark : ThemeMode.light,
                  );
                },
              );
            },
          ),
          ListTile(
            leading: const Icon(Icons.delete_outline),
            title: const Text('Clear History'),
            onTap: () {
              Provider.of<HistoryViewModel>(
                context,
                listen: false,
              ).clearHistory();
              ScaffoldMessenger.of(
                context,
              ).showSnackBar(const SnackBar(content: Text('History cleared')));
            },
          ),
          const Divider(),
          ListTile(
            leading: const Icon(Icons.privacy_tip_outlined),
            title: const Text('Privacy Policy'),
            subtitle: const Text('No data collected'),
            onTap: () {
              // TODO: Launch URL
            },
          ),
          ListTile(
            leading: const Icon(Icons.description_outlined),
            title: const Text('Terms of Service'),
            onTap: () {
              // TODO: Launch URL
            },
          ),
          ListTile(
            leading: const Icon(Icons.star_rate_outlined),
            title: const Text('Rate App'),
            onTap: () {},
          ),
          ListTile(
            leading: const Icon(Icons.info_outline),
            title: const Text('About'),
            onTap: () {
              Navigator.push(
                context,
                MaterialPageRoute(builder: (context) => const AboutScreen()),
              );
            },
          ),
        ],
      ),
    );
  }
}
