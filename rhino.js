if (common.getlpparam().packageName == 'com.lonelycatgames.Xplore') {
  common.hookMethod('w8.h', 'u', [], (param) =>
    param.setResult(java.lang.Integer.valueOf('5'))
  );
}
