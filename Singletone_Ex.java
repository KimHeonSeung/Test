class SingletonEx {

	private SingletonEx() {
		System.out.println("SingletonEx Ŭ������ ��ü ����");
	}
	
	// ���� Ŭ������ ��ü�� �����ϴ� ����
	private static SingletonEx instance = null;
	
	// ���� Ŭ������ ��ü�� ��ȯ�� �� �ִ� static �޼ҵ��� ����
	public static SingletonEx getInstance() {
		if ( instance == null )
			instance = new SingletonEx();
		return instance;
	}
}

public class Singletone_Ex {
	public static void main(String[] args) {
		
		// static �޼ҵ带 ���� ��ü�� �����޴� �ڵ�
		SingletonEx s1 = SingletonEx.getInstance();
		SingletonEx s2 = SingletonEx.getInstance();
		SingletonEx s3 = SingletonEx.getInstance();
		
		// ���
		// Singleton Ex Ŭ���� ��ü ���� 1�� ���
	}
}
