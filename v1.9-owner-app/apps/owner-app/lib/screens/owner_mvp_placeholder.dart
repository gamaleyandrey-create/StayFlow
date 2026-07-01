import 'package:flutter/material.dart';

class OwnerMvpPlaceholder extends StatelessWidget {
  const OwnerMvpPlaceholder({super.key});

  @override
  Widget build(BuildContext context) {
    final screens = [
      'Dashboard',
      'Properties',
      'Bookings',
      'Tasks',
      'Notifications',
      'Settings',
    ];

    return Scaffold(
      appBar: AppBar(title: const Text('StayFlow Owner MVP')),
      body: ListView(
        padding: const EdgeInsets.all(16),
        children: screens.map((s) => Card(child: ListTile(title: Text(s)))).toList(),
      ),
    );
  }
}
