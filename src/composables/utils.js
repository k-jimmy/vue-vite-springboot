import nProgress from "nprogress"

//显示页面加载 Loading
export function showPageLoading() {
    nProgress.start()
}
//隐藏页面加载 Loading
export function hidePageLoading() {
    nProgress.done()
}

export function showMessage(message = '提示内容', type = 'success', customClass = '') {
    return ElMessage({
        type: type,
        message,
        customClass
    })
}