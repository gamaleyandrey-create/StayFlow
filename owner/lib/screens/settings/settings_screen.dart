import 'package:flutter/material.dart';

class SettingsScreen extends StatelessWidget {
  const SettingsScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final items = ['Company', 'Team', 'Subscription', 'Language', 'Currency', 'Logout'];

    return Scaffold(
      appBar: AppBar(title: const Text('More')),
      body: ListView(
        padding: const EdgeInsets.all(16),
        children: items.map((item) {
          return Card(
            child: ListTile(
              title: Text(item),
              trailing: const Icon(Icons.chevron_right),
            ),
          );
        }).toList(),
      ),
    );
  }
}
