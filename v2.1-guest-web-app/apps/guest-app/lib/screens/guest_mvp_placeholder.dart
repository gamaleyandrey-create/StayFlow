import 'package:flutter/material.dart';

class GuestMvpPlaceholder extends StatelessWidget {
  const GuestMvpPlaceholder({super.key});

  @override
  Widget build(BuildContext context) {
    final items = [
      'Check-in Info',
      'Wi-Fi',
      'Door Code',
      'Apartment Guide',
      'Chat',
      'Services',
      'Report Problem',
    ];

    return Scaffold(
      appBar: AppBar(title: const Text('Welcome')),
      body: ListView(
        padding: const EdgeInsets.all(16),
        children: items.map((i) => Card(child: ListTile(title: Text(i)))).toList(),
      ),
    );
  }
}
