#include <iostream>
using namespace std;

struct LNode
{
	int data;
	LNode * next;
	LNode * twoPrev;
};

class loopy{

private:
	LNode* head;
	LNode* tail;

public:
	loopy();
	~loopy();
	void 

};

loopy::loopy(){

	head = new LNode; // sentinel node 1
	head -> next = new LNode; // sentinel node 2
	head -> next -> next = new LNode; // sentinel node 3
	head -> next -> next -> next = new LNode; // sentinel node 4
	tail = head -> next -> next -> next; // tail is at the end
	LNode *temp = head -> next -> next; //
	temp -> twoPrev = head; // loop 3 to 1
	//temp -> next = tail; // linking 
	tail -> twoPrev = head -> next; // loop 2 n 4
}

void loopy::insertAtFront(int newData) {
// set a pointer to the second sentinel node:
LNode * prev = head -> next;
// create a new node:
LNode * newN = new LNode (newData);
// update forward pointers:
LNode * temp = prev -> next; // sentinel 3
prev -> next = newN;
newN -> next = temp;
temp -> twoPrev = prev;
newN -> twoPrev = head;
}
