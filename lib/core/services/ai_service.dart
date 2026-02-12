import 'dart:convert';
import 'package:http/http.dart' as http;
import '../constants/app_constants.dart';

class AiService {
  Future<String?> generateDurationSuggestion(String taskName) async {
    final url = Uri.parse(
      'https://generativelanguage.googleapis.com/v1beta/models/${AppConstants.aiModelId}:generateContent?key=${AppConstants.apiKey}',
    );

    try {
      final response = await http.post(
        url,
        headers: {'Content-Type': 'application/json'},
        body: jsonEncode({
          'contents': [
            {
              'parts': [
                {
                  'text':
                      'Suggest a timer duration in minutes for the task: "$taskName". Return ONLY the number (e.g. 25). If unsure, return 25.',
                },
              ],
            },
          ],
        }),
      );

      if (response.statusCode == 200) {
        final data = jsonDecode(response.body);
        final String text =
            data['candidates']?[0]?['content']?['parts']?[0]?['text'] ?? '';

        // Extract number from text (it might contain whitespace or newlines)
        final RegExp regex = RegExp(r'\d+');
        final match = regex.firstMatch(text);
        return match?.group(0);
      } else {
        return null;
      }
    } catch (e) {
      return null;
    }
  }
}
