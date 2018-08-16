export function saveToLocal(id,key,val){
	let seller = window.localStorage._seller_;
	//如果本地没有数据
	if(!seller){
		seller = {};
		seller[id] = {};
		seller[id][key] = val;
	}else{
		seller = JSON.parse(seller);
		//判断是否有这个商家
		if(!seller[id]){
			seller[id] = {};
		}	
	}
	seller[id][key] = val;
	window.localStorage._seller_ = JSON.stringify(seller)
};
export function loadFromLocal(id,key,def){
	let seller = window.localStorage._seller_;
	if(!seller){
		return def;
	}
	seller = JSON.parse(seller)[id];
	if(!seller){
		return
	}
	let ret = seller[key]
	return ret || def
}