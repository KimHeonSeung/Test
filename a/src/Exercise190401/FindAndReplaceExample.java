package Exercise190401;

public class FindAndReplaceExample {

	public static void main(String[] args) {
		String str = "��� ���α׷��� �ڹ� ���� ���ߵ� �� �ִ�.";
		int index = str.indexOf(str);
		
		if( index == -1 ) {
			System.out.println("�ڹ� ���ڿ��� ���ԵǾ� ���� �ʽ��ϴ�.");
		} else {
			System.out.println("�ڹ� ���ڿ��� ���ԵǾ� �ֽ��ϴ�.");
			str = str.replaceAll("�ڹ�", "java");
			System.out.println(" ---> "+str);
		}

	}

}
