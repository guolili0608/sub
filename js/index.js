'use static'
$(function(){
	/*清空部分JS*/
	$('#clear').on('click',function(){
		$('.box input').attr('checked',false);
	});
	/*联动全选部分JS*/
	function check(id1,id2){
		$('#'+id1).on('click',function(){
			$('#'+id2).find('input').attr('checked',this.checked);
		});
		$('#'+id2).find('input').on('click',function(){
			var count=0;
			$('#'+id2).find('input').each(function(){
				if($(this).attr('checked')){
					count++;
				}
				//console.log(count);
			});
			if(count==$('#'+id2).find('input').length){
				$('#'+id1).attr('checked',true);
			}
			else{
				$('#'+id1).attr('checked',false);
			}
		});	
	}
	check('btn1','ul1');
	check('btn2','ul2');
	/*下拉箭头控制显示隐藏部分JS*/
	function show(id1,id2){
		$('#'+id1).toggle(function(){
			$('#'+id2).hide();
			$(this).addClass('up');
		},function(){
			$('#'+id2).show();
			$(this).removeClass('up');
		});	
	}
	show("list1","ul1");
	show("list2","ul2");
	/*动态计算部门后总数*/
	function allTotal(id){
		var total = 0;
		$('#'+id).find('ul').find('i').each(function(){
			total += Number($(this).html());
		});
		$('#'+id).find('span').html(total);
	};

	allTotal("department1");
	allTotal("department2");
});