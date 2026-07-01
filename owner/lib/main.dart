import 'package:flutter/material.dart';

void main() {
  runApp(const StayFlowOwnerApp());
}

class StayFlowOwnerApp extends StatelessWidget {
  const StayFlowOwnerApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'StayFlow Owner',
      theme: ThemeData(primarySwatch: Colors.blue),
      home: const OwnerDashboardScreen(),
    );
  }
}

class OwnerDashboardScreen extends StatelessWidget {
  const OwnerDashboardScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('StayFlow Owner')),
      body: const Padding(
        padding: EdgeInsets.all(16),
        child: Text('Dashboard: Properties, Bookings, Tasks, Finance'),
      ),
    );
  }
}
