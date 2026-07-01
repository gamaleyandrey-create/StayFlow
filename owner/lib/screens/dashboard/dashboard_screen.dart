import 'package:flutter/material.dart';
import '../../widgets/dashboard_card.dart';
import '../properties/properties_screen.dart';
import '../bookings/bookings_screen.dart';
import '../tasks/tasks_screen.dart';
import '../settings/settings_screen.dart';

class DashboardScreen extends StatefulWidget {
  const DashboardScreen({super.key});

  @override
  State<DashboardScreen> createState() => _DashboardScreenState();
}

class _DashboardScreenState extends State<DashboardScreen> {
  int index = 0;

  final screens = const [
    DashboardHome(),
    PropertiesScreen(),
    BookingsScreen(),
    TasksScreen(),
    SettingsScreen(),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: screens[index],
      bottomNavigationBar: NavigationBar(
        selectedIndex: index,
        onDestinationSelected: (value) => setState(() => index = value),
        destinations: const [
          NavigationDestination(icon: Icon(Icons.dashboard), label: 'Dashboard'),
          NavigationDestination(icon: Icon(Icons.home_work), label: 'Properties'),
          NavigationDestination(icon: Icon(Icons.event), label: 'Bookings'),
          NavigationDestination(icon: Icon(Icons.task_alt), label: 'Tasks'),
          NavigationDestination(icon: Icon(Icons.settings), label: 'More'),
        ],
      ),
    );
  }
}

class DashboardHome extends StatelessWidget {
  const DashboardHome({super.key});

  @override
  Widget build(BuildContext context) {
    final cards = [
      ('Properties', '12', Icons.home_work),
      ('Check-ins', '3', Icons.login),
      ('Check-outs', '4', Icons.logout),
      ('Cleaning', '5', Icons.cleaning_services),
      ('Repairs', '1', Icons.build),
      ('Revenue', '€12,480', Icons.euro),
    ];

    return Scaffold(
      appBar: AppBar(title: const Text('Dashboard')),
      body: GridView.count(
        padding: const EdgeInsets.all(16),
        crossAxisCount: 2,
        childAspectRatio: 1.25,
        children: cards
            .map((item) => DashboardCard(title: item.$1, value: item.$2, icon: item.$3))
            .toList(),
      ),
      floatingActionButton: FloatingActionButton.extended(
        onPressed: () {},
        label: const Text('New Booking'),
        icon: const Icon(Icons.add),
      ),
    );
  }
}
