import 'package:flutter/material.dart';

void main() {
  runApp(const StayFlowWorkerApp());
}

class StayFlowWorkerApp extends StatelessWidget {
  const StayFlowWorkerApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'StayFlow Worker',
      theme: ThemeData(primarySwatch: Colors.green),
      home: const WorkerTasksScreen(),
    );
  }
}

class WorkerTasksScreen extends StatelessWidget {
  const WorkerTasksScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('StayFlow Worker')),
      body: const Padding(
        padding: EdgeInsets.all(16),
        child: Text('Today Tasks: Accept, Start, Complete, Upload Report'),
      ),
    );
  }
}
