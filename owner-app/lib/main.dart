import 'package:flutter/material.dart';

void main() => runApp(const StayFlowOwnerApp());

class StayFlowOwnerApp extends StatelessWidget {
  const StayFlowOwnerApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'StayFlow Owner',
      debugShowCheckedModeBanner: false,
      home: const OwnerHome(),
    );
  }
}

class OwnerHome extends StatelessWidget {
  const OwnerHome({super.key});

  @override
  Widget build(BuildContext context) {
    final items = ['Properties', 'Bookings', 'Tasks', 'Guest Links', 'Finance'];

    return Scaffold(
      appBar: AppBar(title: const Text('StayFlow Owner')),
      body: ListView(
        padding: const EdgeInsets.all(16),
        children: items.map((item) => Card(child: ListTile(title: Text(item)))).toList(),
      ),
    );
  }
}
