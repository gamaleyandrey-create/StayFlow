import 'package:flutter/material.dart';
import '../../models/task.dart';
import '../../widgets/status_badge.dart';

class TasksScreen extends StatelessWidget {
  const TasksScreen({super.key});

  static final tasks = [
    TaskItem(id: '1', title: 'Cleaning after John Smith', propertyTitle: 'Apartment Marbella 01', type: 'Cleaning', status: 'NEW', date: '2026-08-05'),
    TaskItem(id: '2', title: 'Fix air conditioner', propertyTitle: 'Studio Malaga Port', type: 'Repair', status: 'PROBLEM', date: '2026-08-02'),
    TaskItem(id: '3', title: 'Photo report', propertyTitle: 'Villa Nueva Andalucia', type: 'Inspection', status: 'COMPLETED', date: '2026-08-01'),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Tasks')),
      body: ListView(
        padding: const EdgeInsets.all(16),
        children: tasks.map((task) {
          return Card(
            child: ListTile(
              leading: const CircleAvatar(child: Icon(Icons.task_alt)),
              title: Text(task.title),
              subtitle: Text('${task.propertyTitle}\n${task.type} · ${task.date}'),
              isThreeLine: true,
              trailing: StatusBadge(status: task.status),
            ),
          );
        }).toList(),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {},
        child: const Icon(Icons.add),
      ),
    );
  }
}
