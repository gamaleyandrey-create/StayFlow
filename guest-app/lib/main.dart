import 'package:flutter/material.dart';

void main() => runApp(const StayFlowGuestApp());

class StayFlowGuestApp extends StatelessWidget {
  const StayFlowGuestApp({super.key});

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      debugShowCheckedModeBanner: false,
      home: GuestHome(),
    );
  }
}

class GuestHome extends StatelessWidget {
  const GuestHome({super.key});

  @override
  Widget build(BuildContext context) {
    final items = ['Check-in Info', 'Wi-Fi', 'Door Code', 'Apartment Guide', 'Chat', 'Report Problem'];

    return Scaffold(
      appBar: AppBar(title: const Text('Welcome')),
      body: ListView(
        padding: const EdgeInsets.all(16),
        children: items.map((item) => Card(child: ListTile(title: Text(item)))).toList(),
      ),
    );
  }
}
