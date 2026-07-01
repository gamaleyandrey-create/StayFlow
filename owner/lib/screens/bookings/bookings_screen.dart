import 'package:flutter/material.dart';
import '../../models/booking.dart';

class BookingsScreen extends StatelessWidget {
  const BookingsScreen({super.key});

  static final bookings = [
    Booking(id: '1', guestName: 'John Smith', propertyTitle: 'Apartment Marbella 01', checkInDate: '2026-08-01', checkOutDate: '2026-08-05', amount: 850),
    Booking(id: '2', guestName: 'Maria Brown', propertyTitle: 'Villa Nueva Andalucia', checkInDate: '2026-08-07', checkOutDate: '2026-08-12', amount: 2400),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Bookings')),
      body: ListView(
        padding: const EdgeInsets.all(16),
        children: bookings.map((booking) {
          return Card(
            child: ListTile(
              leading: const CircleAvatar(child: Icon(Icons.person)),
              title: Text(booking.guestName),
              subtitle: Text('${booking.propertyTitle}\n${booking.checkInDate} → ${booking.checkOutDate}'),
              isThreeLine: true,
              trailing: Text('€${booking.amount.toStringAsFixed(0)}'),
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
