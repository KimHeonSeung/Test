// �����ʿ�


// static Ű����� ��ü���⿡�� ������ ����ϰ� ���Ͽ� Ȱ��Ǵ� ����
// �̱��� ���� : static Ű���带 Ȱ���ϴ� ��ǥ���� ������ ����
//	- Ư�� Ŭ������ ��ü�� �ݵ�� 1���� ������ �� �ֵ��� �����ϴ� ����

class SingletonEx {
	
	// ��ü�� ���� �� �ڵ����� ȣ��Ǵ� �޼ҵ�
	// 	- ������ �޼ҵ�
	//	- �������� ������ �����ϸ� ��ü�� ������ ������ �� �ִ�.
	//	- public���� ���ǵ� �����ڴ� ��ü�� ������ ������� ������ �� �ִ�.
	//	- private���� ���ǵ� �����ڴ� ��ü�� ������ �ܺο��� �� �� ������ �����Ѵ�.
	// public SingletonEx() {}
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
		
		// private���� ���ǵ� �����ڴ� Ŭ������ ���ο����� �����Ӱ� ������ �� �ִ�.
		// return new SingletonEx();
	}
}

public class Class_25_Static {
	public static void main(String[] args) {
		// private ���� ���ǵ� �����ڴ� Ŭ������ �ܺο��� ��ü�� ������ �� ������ �����Ѵ�.
		//	SingletonEx s1 = new SingletonEx();
		//	SingletonEx s2 = new SingletonEx();
		//	SingletonEx s3 = new SingletonEx();
		
		// static �޼ҵ带 ���� ��ü�� �����޴� �ڵ�
		SingletonEx s1 = SingletonEx.getInstance();
		SingletonEx s2 = SingletonEx.getInstance();
		SingletonEx s3 = SingletonEx.getInstance();
		
	}
}
