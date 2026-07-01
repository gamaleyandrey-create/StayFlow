import 'dart:convert';
import 'package:http/http.dart' as http;
import '../models/property.dart';

class ApiService {
  static const String baseUrl = 'http://localhost:3000/api';

  Future<List<Property>> getProperties() async {
    final response = await http.get(Uri.parse('$baseUrl/properties'));

    if (response.statusCode != 200) {
      throw Exception('Failed to load properties');
    }

    final List data = jsonDecode(response.body);
    return data.map((item) => Property.fromJson(item)).toList();
  }

  Future<Map<String, dynamic>> login(String email, String password) async {
    final response = await http.post(
      Uri.parse('$baseUrl/auth/login'),
      headers: {'Content-Type': 'application/json'},
      body: jsonEncode({'email': email, 'password': password}),
    );

    if (response.statusCode != 201 && response.statusCode != 200) {
      throw Exception('Login failed');
    }

    return jsonDecode(response.body);
  }
}
