import 'package:flutter/material.dart';

void main() => runApp(const StayFlowWorkerApp());

class StayFlowWorkerApp extends StatelessWidget {
  const StayFlowWorkerApp({super.key});

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      debugShowCheckedModeBanner: false,
      home: WorkerHome(),
    );
  }
}

class WorkerHome extends StatelessWidget {
  const WorkerHome({super.key});

  @override
  Widget build(BuildContext context) {
    final tasks = ['Cleaning Apartment 12', 'Repair AC Villa 4', 'Photo Report Studio 2'];

    return Scaffold(
      appBar: AppBar(title: const Text('Worker Tasks')),
      body: ListView(
        padding: const EdgeInsets.all(16),
        children: tasks.map((task) => Card(child: ListTile(title: Text(task)))).toList(),
      ),
    );
  }
}
