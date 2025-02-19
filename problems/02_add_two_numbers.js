  function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }
 
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
	let head = new ListNode();
	let current = head.next;
	let carry = 0;


	while (l1 || l2 || carry) {
		sum += carry;

		if(l1) {
			sum += l1;
			l1 = l1.next;
		}

		if(l2) {
			sum += l2;
			l2 = l2.next;
		}

		carry = Math.floor(sum / 10);
		current.next = new ListNode(sum % 10);
		current = current.next;

	}

	return head.next;
	
};


console.log(addTwoNumbers([2,4,3],[5,6,4]));
