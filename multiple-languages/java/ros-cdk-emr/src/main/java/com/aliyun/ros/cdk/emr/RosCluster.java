package com.aliyun.ros.cdk.emr;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::EMR::Cluster</code>, which is used to create an E-MapReduce (EMR) cluster.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-29T07:52:39.542Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.emr.$Module.class, fqn = "@alicloud/ros-cdk-emr.RosCluster")
public class RosCluster extends com.aliyun.ros.cdk.core.RosResource {

    protected RosCluster(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosCluster(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.emr.RosCluster.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosCluster(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.emr.RosClusterProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), java.util.Objects.requireNonNull(enableResourcePropertyConstraint, "enableResourcePropertyConstraint is required") });
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> renderProperties(final @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> props) {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.call(this, "renderProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class)), new Object[] { java.util.Objects.requireNonNull(props, "props is required") }));
    }

    /**
     * The resource type name for this resource class.
     */
    public final static java.lang.String ROS_RESOURCE_TYPE_NAME;

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrClusterId() {
        return software.amazon.jsii.Kernel.get(this, "attrClusterId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrHostGroups() {
        return software.amazon.jsii.Kernel.get(this, "attrHostGroups", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrMasterNodeInnerIps() {
        return software.amazon.jsii.Kernel.get(this, "attrMasterNodeInnerIps", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrMasterNodePubIps() {
        return software.amazon.jsii.Kernel.get(this, "attrMasterNodePubIps", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getChargeType() {
        return software.amazon.jsii.Kernel.get(this, "chargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setChargeType(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "chargeType", java.util.Objects.requireNonNull(value, "chargeType is required"));
    }

    /**
     */
    public void setChargeType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "chargeType", java.util.Objects.requireNonNull(value, "chargeType is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getClusterType() {
        return software.amazon.jsii.Kernel.get(this, "clusterType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setClusterType(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "clusterType", java.util.Objects.requireNonNull(value, "clusterType is required"));
    }

    /**
     */
    public void setClusterType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "clusterType", java.util.Objects.requireNonNull(value, "clusterType is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getEmrVer() {
        return software.amazon.jsii.Kernel.get(this, "emrVer", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEmrVer(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "emrVer", java.util.Objects.requireNonNull(value, "emrVer is required"));
    }

    /**
     */
    public void setEmrVer(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "emrVer", java.util.Objects.requireNonNull(value, "emrVer is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getHostGroup() {
        return software.amazon.jsii.Kernel.get(this, "hostGroup", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setHostGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "hostGroup", java.util.Objects.requireNonNull(value, "hostGroup is required"));
    }

    /**
     */
    public void setHostGroup(final @org.jetbrains.annotations.NotNull java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.emr.RosCluster.HostGroupProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.emr.RosCluster.HostGroupProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "hostGroup", java.util.Objects.requireNonNull(value, "hostGroup is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getName() {
        return software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "name", java.util.Objects.requireNonNull(value, "name is required"));
    }

    /**
     */
    public void setName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "name", java.util.Objects.requireNonNull(value, "name is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getNetType() {
        return software.amazon.jsii.Kernel.get(this, "netType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setNetType(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "netType", java.util.Objects.requireNonNull(value, "netType is required"));
    }

    /**
     */
    public void setNetType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "netType", java.util.Objects.requireNonNull(value, "netType is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getUseLocalMetaDb() {
        return software.amazon.jsii.Kernel.get(this, "useLocalMetaDb", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setUseLocalMetaDb(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "useLocalMetaDb", java.util.Objects.requireNonNull(value, "useLocalMetaDb is required"));
    }

    /**
     */
    public void setUseLocalMetaDb(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "useLocalMetaDb", java.util.Objects.requireNonNull(value, "useLocalMetaDb is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getZoneId() {
        return software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setZoneId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "zoneId", java.util.Objects.requireNonNull(value, "zoneId is required"));
    }

    /**
     */
    public void setZoneId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "zoneId", java.util.Objects.requireNonNull(value, "zoneId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAuthorizeContent() {
        return software.amazon.jsii.Kernel.get(this, "authorizeContent", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAuthorizeContent(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "authorizeContent", value);
    }

    /**
     */
    public void setAuthorizeContent(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "authorizeContent", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAutoRenew() {
        return software.amazon.jsii.Kernel.get(this, "autoRenew", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAutoRenew(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "autoRenew", value);
    }

    /**
     */
    public void setAutoRenew(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "autoRenew", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getBootstrapAction() {
        return software.amazon.jsii.Kernel.get(this, "bootstrapAction", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setBootstrapAction(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "bootstrapAction", value);
    }

    /**
     */
    public void setBootstrapAction(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.emr.RosCluster.BootstrapActionProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.emr.RosCluster.BootstrapActionProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "bootstrapAction", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getClickHouseConf() {
        return software.amazon.jsii.Kernel.get(this, "clickHouseConf", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setClickHouseConf(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "clickHouseConf", value);
    }

    /**
     */
    public void setClickHouseConf(final @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            if (!(value.keySet().toArray()[0] instanceof String)) {
                throw new IllegalArgumentException(
                    new java.lang.StringBuilder("Expected ")
                        .append("value").append(".keySet()")
                        .append(" to contain class String; received ")
                        .append(value.keySet().toArray()[0].getClass()).toString());
            }
            for (final java.util.Map.Entry<String, java.lang.Object> __item_ac66f0: value.entrySet()) {
                final java.lang.Object __val_ac66f0 = __item_ac66f0.getValue();
            }
        }
        software.amazon.jsii.Kernel.set(this, "clickHouseConf", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getConfig() {
        return software.amazon.jsii.Kernel.get(this, "config", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "config", value);
    }

    /**
     */
    public void setConfig(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.emr.RosCluster.ConfigProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.emr.RosCluster.ConfigProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "config", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getConfigurations() {
        return software.amazon.jsii.Kernel.get(this, "configurations", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setConfigurations(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "configurations", value);
    }

    /**
     */
    public void setConfigurations(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "configurations", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDepositType() {
        return software.amazon.jsii.Kernel.get(this, "depositType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDepositType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "depositType", value);
    }

    /**
     */
    public void setDepositType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "depositType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEasEnable() {
        return software.amazon.jsii.Kernel.get(this, "easEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEasEnable(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "easEnable", value);
    }

    /**
     */
    public void setEasEnable(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "easEnable", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getHighAvailabilityEnable() {
        return software.amazon.jsii.Kernel.get(this, "highAvailabilityEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setHighAvailabilityEnable(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "highAvailabilityEnable", value);
    }

    /**
     */
    public void setHighAvailabilityEnable(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "highAvailabilityEnable", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getInitCustomHiveMetaDb() {
        return software.amazon.jsii.Kernel.get(this, "initCustomHiveMetaDb", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setInitCustomHiveMetaDb(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "initCustomHiveMetaDb", value);
    }

    /**
     */
    public void setInitCustomHiveMetaDb(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "initCustomHiveMetaDb", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getInstanceGeneration() {
        return software.amazon.jsii.Kernel.get(this, "instanceGeneration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setInstanceGeneration(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "instanceGeneration", value);
    }

    /**
     */
    public void setInstanceGeneration(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "instanceGeneration", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getIoOptimized() {
        return software.amazon.jsii.Kernel.get(this, "ioOptimized", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setIoOptimized(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "ioOptimized", value);
    }

    /**
     */
    public void setIoOptimized(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "ioOptimized", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getIsOpenPublicIp() {
        return software.amazon.jsii.Kernel.get(this, "isOpenPublicIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setIsOpenPublicIp(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "isOpenPublicIp", value);
    }

    /**
     */
    public void setIsOpenPublicIp(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "isOpenPublicIp", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getKeyPairName() {
        return software.amazon.jsii.Kernel.get(this, "keyPairName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setKeyPairName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "keyPairName", value);
    }

    /**
     */
    public void setKeyPairName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "keyPairName", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getLogPath() {
        return software.amazon.jsii.Kernel.get(this, "logPath", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setLogPath(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "logPath", value);
    }

    /**
     */
    public void setLogPath(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "logPath", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMachineType() {
        return software.amazon.jsii.Kernel.get(this, "machineType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMachineType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "machineType", value);
    }

    /**
     */
    public void setMachineType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "machineType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMasterPwd() {
        return software.amazon.jsii.Kernel.get(this, "masterPwd", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMasterPwd(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "masterPwd", value);
    }

    /**
     */
    public void setMasterPwd(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "masterPwd", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMetaStoreConf() {
        return software.amazon.jsii.Kernel.get(this, "metaStoreConf", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMetaStoreConf(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "metaStoreConf", value);
    }

    /**
     */
    public void setMetaStoreConf(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "metaStoreConf", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMetaStoreType() {
        return software.amazon.jsii.Kernel.get(this, "metaStoreType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMetaStoreType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "metaStoreType", value);
    }

    /**
     */
    public void setMetaStoreType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "metaStoreType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getOptionSoftWareList() {
        return software.amazon.jsii.Kernel.get(this, "optionSoftWareList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setOptionSoftWareList(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "optionSoftWareList", value);
    }

    /**
     */
    public void setOptionSoftWareList(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof java.lang.String)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: java.lang.String, com.aliyun.ros.cdk.core.IResolvable; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "optionSoftWareList", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPeriod() {
        return software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPeriod(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "period", value);
    }

    /**
     */
    public void setPeriod(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "period", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRelatedClusterId() {
        return software.amazon.jsii.Kernel.get(this, "relatedClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRelatedClusterId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "relatedClusterId", value);
    }

    /**
     */
    public void setRelatedClusterId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "relatedClusterId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setResourceGroupId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "resourceGroupId", value);
    }

    /**
     */
    public void setResourceGroupId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "resourceGroupId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSecurityGroupId() {
        return software.amazon.jsii.Kernel.get(this, "securityGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSecurityGroupId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "securityGroupId", value);
    }

    /**
     */
    public void setSecurityGroupId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "securityGroupId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSecurityGroupName() {
        return software.amazon.jsii.Kernel.get(this, "securityGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSecurityGroupName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "securityGroupName", value);
    }

    /**
     */
    public void setSecurityGroupName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "securityGroupName", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSshEnable() {
        return software.amazon.jsii.Kernel.get(this, "sshEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSshEnable(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "sshEnable", value);
    }

    /**
     */
    public void setSshEnable(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "sshEnable", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.emr.RosCluster.TagsProperty> getTags() {
        return java.util.Optional.ofNullable((java.util.List<com.aliyun.ros.cdk.emr.RosCluster.TagsProperty>)(software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.emr.RosCluster.TagsProperty.class))))).map(java.util.Collections::unmodifiableList).orElse(null);
    }

    /**
     */
    public void setTags(final @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.emr.RosCluster.TagsProperty> value) {
        software.amazon.jsii.Kernel.set(this, "tags", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getUseCustomHiveMetaDb() {
        return software.amazon.jsii.Kernel.get(this, "useCustomHiveMetaDb", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setUseCustomHiveMetaDb(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "useCustomHiveMetaDb", value);
    }

    /**
     */
    public void setUseCustomHiveMetaDb(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "useCustomHiveMetaDb", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getUserDefinedEmrEcsRole() {
        return software.amazon.jsii.Kernel.get(this, "userDefinedEmrEcsRole", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setUserDefinedEmrEcsRole(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "userDefinedEmrEcsRole", value);
    }

    /**
     */
    public void setUserDefinedEmrEcsRole(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "userDefinedEmrEcsRole", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getUserInfo() {
        return software.amazon.jsii.Kernel.get(this, "userInfo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setUserInfo(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "userInfo", value);
    }

    /**
     */
    public void setUserInfo(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.emr.RosCluster.UserInfoProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.emr.RosCluster.UserInfoProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "userInfo", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getVpcId() {
        return software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setVpcId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "vpcId", value);
    }

    /**
     */
    public void setVpcId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "vpcId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getVSwitchId() {
        return software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setVSwitchId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "vSwitchId", value);
    }

    /**
     */
    public void setVSwitchId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "vSwitchId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getWhiteListType() {
        return software.amazon.jsii.Kernel.get(this, "whiteListType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setWhiteListType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "whiteListType", value);
    }

    /**
     */
    public void setWhiteListType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "whiteListType", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.emr.$Module.class, fqn = "@alicloud/ros-cdk-emr.RosCluster.BootstrapActionProperty")
    @software.amazon.jsii.Jsii.Proxy(BootstrapActionProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface BootstrapActionProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getArg() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPath() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link BootstrapActionProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link BootstrapActionProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<BootstrapActionProperty> {
            java.lang.Object arg;
            java.lang.Object name;
            java.lang.Object path;

            /**
             * Sets the value of {@link BootstrapActionProperty#getArg}
             * @param arg the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder arg(java.lang.String arg) {
                this.arg = arg;
                return this;
            }

            /**
             * Sets the value of {@link BootstrapActionProperty#getArg}
             * @param arg the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder arg(com.aliyun.ros.cdk.core.IResolvable arg) {
                this.arg = arg;
                return this;
            }

            /**
             * Sets the value of {@link BootstrapActionProperty#getName}
             * @param name the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder name(java.lang.String name) {
                this.name = name;
                return this;
            }

            /**
             * Sets the value of {@link BootstrapActionProperty#getName}
             * @param name the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
                this.name = name;
                return this;
            }

            /**
             * Sets the value of {@link BootstrapActionProperty#getPath}
             * @param path the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder path(java.lang.String path) {
                this.path = path;
                return this;
            }

            /**
             * Sets the value of {@link BootstrapActionProperty#getPath}
             * @param path the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder path(com.aliyun.ros.cdk.core.IResolvable path) {
                this.path = path;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link BootstrapActionProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public BootstrapActionProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link BootstrapActionProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements BootstrapActionProperty {
            private final java.lang.Object arg;
            private final java.lang.Object name;
            private final java.lang.Object path;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.arg = software.amazon.jsii.Kernel.get(this, "arg", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.path = software.amazon.jsii.Kernel.get(this, "path", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.arg = builder.arg;
                this.name = builder.name;
                this.path = builder.path;
            }

            @Override
            public final java.lang.Object getArg() {
                return this.arg;
            }

            @Override
            public final java.lang.Object getName() {
                return this.name;
            }

            @Override
            public final java.lang.Object getPath() {
                return this.path;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getArg() != null) {
                    data.set("arg", om.valueToTree(this.getArg()));
                }
                if (this.getName() != null) {
                    data.set("name", om.valueToTree(this.getName()));
                }
                if (this.getPath() != null) {
                    data.set("path", om.valueToTree(this.getPath()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-emr.RosCluster.BootstrapActionProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                BootstrapActionProperty.Jsii$Proxy that = (BootstrapActionProperty.Jsii$Proxy) o;

                if (this.arg != null ? !this.arg.equals(that.arg) : that.arg != null) return false;
                if (this.name != null ? !this.name.equals(that.name) : that.name != null) return false;
                return this.path != null ? this.path.equals(that.path) : that.path == null;
            }

            @Override
            public final int hashCode() {
                int result = this.arg != null ? this.arg.hashCode() : 0;
                result = 31 * result + (this.name != null ? this.name.hashCode() : 0);
                result = 31 * result + (this.path != null ? this.path.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.emr.$Module.class, fqn = "@alicloud/ros-cdk-emr.RosCluster.ConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(ConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getConfigKey() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getConfigValue() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getEncrypt() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getFileName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getReplace() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getServiceName() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ConfigProperty> {
            java.lang.Object configKey;
            java.lang.Object configValue;
            java.lang.Object encrypt;
            java.lang.Object fileName;
            java.lang.Object replace;
            java.lang.Object serviceName;

            /**
             * Sets the value of {@link ConfigProperty#getConfigKey}
             * @param configKey the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder configKey(java.lang.String configKey) {
                this.configKey = configKey;
                return this;
            }

            /**
             * Sets the value of {@link ConfigProperty#getConfigKey}
             * @param configKey the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder configKey(com.aliyun.ros.cdk.core.IResolvable configKey) {
                this.configKey = configKey;
                return this;
            }

            /**
             * Sets the value of {@link ConfigProperty#getConfigValue}
             * @param configValue the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder configValue(java.lang.String configValue) {
                this.configValue = configValue;
                return this;
            }

            /**
             * Sets the value of {@link ConfigProperty#getConfigValue}
             * @param configValue the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder configValue(com.aliyun.ros.cdk.core.IResolvable configValue) {
                this.configValue = configValue;
                return this;
            }

            /**
             * Sets the value of {@link ConfigProperty#getEncrypt}
             * @param encrypt the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder encrypt(java.lang.String encrypt) {
                this.encrypt = encrypt;
                return this;
            }

            /**
             * Sets the value of {@link ConfigProperty#getEncrypt}
             * @param encrypt the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder encrypt(com.aliyun.ros.cdk.core.IResolvable encrypt) {
                this.encrypt = encrypt;
                return this;
            }

            /**
             * Sets the value of {@link ConfigProperty#getFileName}
             * @param fileName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder fileName(java.lang.String fileName) {
                this.fileName = fileName;
                return this;
            }

            /**
             * Sets the value of {@link ConfigProperty#getFileName}
             * @param fileName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder fileName(com.aliyun.ros.cdk.core.IResolvable fileName) {
                this.fileName = fileName;
                return this;
            }

            /**
             * Sets the value of {@link ConfigProperty#getReplace}
             * @param replace the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder replace(java.lang.String replace) {
                this.replace = replace;
                return this;
            }

            /**
             * Sets the value of {@link ConfigProperty#getReplace}
             * @param replace the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder replace(com.aliyun.ros.cdk.core.IResolvable replace) {
                this.replace = replace;
                return this;
            }

            /**
             * Sets the value of {@link ConfigProperty#getServiceName}
             * @param serviceName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder serviceName(java.lang.String serviceName) {
                this.serviceName = serviceName;
                return this;
            }

            /**
             * Sets the value of {@link ConfigProperty#getServiceName}
             * @param serviceName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder serviceName(com.aliyun.ros.cdk.core.IResolvable serviceName) {
                this.serviceName = serviceName;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ConfigProperty {
            private final java.lang.Object configKey;
            private final java.lang.Object configValue;
            private final java.lang.Object encrypt;
            private final java.lang.Object fileName;
            private final java.lang.Object replace;
            private final java.lang.Object serviceName;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.configKey = software.amazon.jsii.Kernel.get(this, "configKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.configValue = software.amazon.jsii.Kernel.get(this, "configValue", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.encrypt = software.amazon.jsii.Kernel.get(this, "encrypt", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.fileName = software.amazon.jsii.Kernel.get(this, "fileName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.replace = software.amazon.jsii.Kernel.get(this, "replace", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.serviceName = software.amazon.jsii.Kernel.get(this, "serviceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.configKey = builder.configKey;
                this.configValue = builder.configValue;
                this.encrypt = builder.encrypt;
                this.fileName = builder.fileName;
                this.replace = builder.replace;
                this.serviceName = builder.serviceName;
            }

            @Override
            public final java.lang.Object getConfigKey() {
                return this.configKey;
            }

            @Override
            public final java.lang.Object getConfigValue() {
                return this.configValue;
            }

            @Override
            public final java.lang.Object getEncrypt() {
                return this.encrypt;
            }

            @Override
            public final java.lang.Object getFileName() {
                return this.fileName;
            }

            @Override
            public final java.lang.Object getReplace() {
                return this.replace;
            }

            @Override
            public final java.lang.Object getServiceName() {
                return this.serviceName;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getConfigKey() != null) {
                    data.set("configKey", om.valueToTree(this.getConfigKey()));
                }
                if (this.getConfigValue() != null) {
                    data.set("configValue", om.valueToTree(this.getConfigValue()));
                }
                if (this.getEncrypt() != null) {
                    data.set("encrypt", om.valueToTree(this.getEncrypt()));
                }
                if (this.getFileName() != null) {
                    data.set("fileName", om.valueToTree(this.getFileName()));
                }
                if (this.getReplace() != null) {
                    data.set("replace", om.valueToTree(this.getReplace()));
                }
                if (this.getServiceName() != null) {
                    data.set("serviceName", om.valueToTree(this.getServiceName()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-emr.RosCluster.ConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ConfigProperty.Jsii$Proxy that = (ConfigProperty.Jsii$Proxy) o;

                if (this.configKey != null ? !this.configKey.equals(that.configKey) : that.configKey != null) return false;
                if (this.configValue != null ? !this.configValue.equals(that.configValue) : that.configValue != null) return false;
                if (this.encrypt != null ? !this.encrypt.equals(that.encrypt) : that.encrypt != null) return false;
                if (this.fileName != null ? !this.fileName.equals(that.fileName) : that.fileName != null) return false;
                if (this.replace != null ? !this.replace.equals(that.replace) : that.replace != null) return false;
                return this.serviceName != null ? this.serviceName.equals(that.serviceName) : that.serviceName == null;
            }

            @Override
            public final int hashCode() {
                int result = this.configKey != null ? this.configKey.hashCode() : 0;
                result = 31 * result + (this.configValue != null ? this.configValue.hashCode() : 0);
                result = 31 * result + (this.encrypt != null ? this.encrypt.hashCode() : 0);
                result = 31 * result + (this.fileName != null ? this.fileName.hashCode() : 0);
                result = 31 * result + (this.replace != null ? this.replace.hashCode() : 0);
                result = 31 * result + (this.serviceName != null ? this.serviceName.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.emr.$Module.class, fqn = "@alicloud/ros-cdk-emr.RosCluster.HostGroupProperty")
    @software.amazon.jsii.Jsii.Proxy(HostGroupProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface HostGroupProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getChargeType();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getDiskCapacity();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getDiskCount();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getDiskType();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getHostGroupType();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getInstanceType();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getNodeCount();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getSysDiskCapacity();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getSysDiskType();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getAutoRenew() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getClusterId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getComment() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCreateType() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getGpuDriver() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getHostGroupId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getHostGroupName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getHostKeyPairName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getHostPassword() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPeriod() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getVSwitchId() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link HostGroupProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link HostGroupProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<HostGroupProperty> {
            java.lang.Object chargeType;
            java.lang.Object diskCapacity;
            java.lang.Object diskCount;
            java.lang.Object diskType;
            java.lang.Object hostGroupType;
            java.lang.Object instanceType;
            java.lang.Object nodeCount;
            java.lang.Object sysDiskCapacity;
            java.lang.Object sysDiskType;
            java.lang.Object autoRenew;
            java.lang.Object clusterId;
            java.lang.Object comment;
            java.lang.Object createType;
            java.lang.Object gpuDriver;
            java.lang.Object hostGroupId;
            java.lang.Object hostGroupName;
            java.lang.Object hostKeyPairName;
            java.lang.Object hostPassword;
            java.lang.Object period;
            java.lang.Object vSwitchId;

            /**
             * Sets the value of {@link HostGroupProperty#getChargeType}
             * @param chargeType the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder chargeType(java.lang.String chargeType) {
                this.chargeType = chargeType;
                return this;
            }

            /**
             * Sets the value of {@link HostGroupProperty#getChargeType}
             * @param chargeType the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder chargeType(com.aliyun.ros.cdk.core.IResolvable chargeType) {
                this.chargeType = chargeType;
                return this;
            }

            /**
             * Sets the value of {@link HostGroupProperty#getDiskCapacity}
             * @param diskCapacity the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder diskCapacity(java.lang.Number diskCapacity) {
                this.diskCapacity = diskCapacity;
                return this;
            }

            /**
             * Sets the value of {@link HostGroupProperty#getDiskCapacity}
             * @param diskCapacity the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder diskCapacity(com.aliyun.ros.cdk.core.IResolvable diskCapacity) {
                this.diskCapacity = diskCapacity;
                return this;
            }

            /**
             * Sets the value of {@link HostGroupProperty#getDiskCount}
             * @param diskCount the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder diskCount(java.lang.Number diskCount) {
                this.diskCount = diskCount;
                return this;
            }

            /**
             * Sets the value of {@link HostGroupProperty#getDiskCount}
             * @param diskCount the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder diskCount(com.aliyun.ros.cdk.core.IResolvable diskCount) {
                this.diskCount = diskCount;
                return this;
            }

            /**
             * Sets the value of {@link HostGroupProperty#getDiskType}
             * @param diskType the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder diskType(java.lang.String diskType) {
                this.diskType = diskType;
                return this;
            }

            /**
             * Sets the value of {@link HostGroupProperty#getDiskType}
             * @param diskType the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder diskType(com.aliyun.ros.cdk.core.IResolvable diskType) {
                this.diskType = diskType;
                return this;
            }

            /**
             * Sets the value of {@link HostGroupProperty#getHostGroupType}
             * @param hostGroupType the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder hostGroupType(java.lang.String hostGroupType) {
                this.hostGroupType = hostGroupType;
                return this;
            }

            /**
             * Sets the value of {@link HostGroupProperty#getHostGroupType}
             * @param hostGroupType the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder hostGroupType(com.aliyun.ros.cdk.core.IResolvable hostGroupType) {
                this.hostGroupType = hostGroupType;
                return this;
            }

            /**
             * Sets the value of {@link HostGroupProperty#getInstanceType}
             * @param instanceType the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder instanceType(java.lang.String instanceType) {
                this.instanceType = instanceType;
                return this;
            }

            /**
             * Sets the value of {@link HostGroupProperty#getInstanceType}
             * @param instanceType the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder instanceType(com.aliyun.ros.cdk.core.IResolvable instanceType) {
                this.instanceType = instanceType;
                return this;
            }

            /**
             * Sets the value of {@link HostGroupProperty#getNodeCount}
             * @param nodeCount the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder nodeCount(java.lang.Number nodeCount) {
                this.nodeCount = nodeCount;
                return this;
            }

            /**
             * Sets the value of {@link HostGroupProperty#getNodeCount}
             * @param nodeCount the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder nodeCount(com.aliyun.ros.cdk.core.IResolvable nodeCount) {
                this.nodeCount = nodeCount;
                return this;
            }

            /**
             * Sets the value of {@link HostGroupProperty#getSysDiskCapacity}
             * @param sysDiskCapacity the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sysDiskCapacity(java.lang.Number sysDiskCapacity) {
                this.sysDiskCapacity = sysDiskCapacity;
                return this;
            }

            /**
             * Sets the value of {@link HostGroupProperty#getSysDiskCapacity}
             * @param sysDiskCapacity the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sysDiskCapacity(com.aliyun.ros.cdk.core.IResolvable sysDiskCapacity) {
                this.sysDiskCapacity = sysDiskCapacity;
                return this;
            }

            /**
             * Sets the value of {@link HostGroupProperty#getSysDiskType}
             * @param sysDiskType the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sysDiskType(java.lang.String sysDiskType) {
                this.sysDiskType = sysDiskType;
                return this;
            }

            /**
             * Sets the value of {@link HostGroupProperty#getSysDiskType}
             * @param sysDiskType the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sysDiskType(com.aliyun.ros.cdk.core.IResolvable sysDiskType) {
                this.sysDiskType = sysDiskType;
                return this;
            }

            /**
             * Sets the value of {@link HostGroupProperty#getAutoRenew}
             * @param autoRenew the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder autoRenew(java.lang.Boolean autoRenew) {
                this.autoRenew = autoRenew;
                return this;
            }

            /**
             * Sets the value of {@link HostGroupProperty#getAutoRenew}
             * @param autoRenew the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder autoRenew(com.aliyun.ros.cdk.core.IResolvable autoRenew) {
                this.autoRenew = autoRenew;
                return this;
            }

            /**
             * Sets the value of {@link HostGroupProperty#getClusterId}
             * @param clusterId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder clusterId(java.lang.String clusterId) {
                this.clusterId = clusterId;
                return this;
            }

            /**
             * Sets the value of {@link HostGroupProperty#getClusterId}
             * @param clusterId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder clusterId(com.aliyun.ros.cdk.core.IResolvable clusterId) {
                this.clusterId = clusterId;
                return this;
            }

            /**
             * Sets the value of {@link HostGroupProperty#getComment}
             * @param comment the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder comment(java.lang.String comment) {
                this.comment = comment;
                return this;
            }

            /**
             * Sets the value of {@link HostGroupProperty#getComment}
             * @param comment the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder comment(com.aliyun.ros.cdk.core.IResolvable comment) {
                this.comment = comment;
                return this;
            }

            /**
             * Sets the value of {@link HostGroupProperty#getCreateType}
             * @param createType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder createType(java.lang.String createType) {
                this.createType = createType;
                return this;
            }

            /**
             * Sets the value of {@link HostGroupProperty#getCreateType}
             * @param createType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder createType(com.aliyun.ros.cdk.core.IResolvable createType) {
                this.createType = createType;
                return this;
            }

            /**
             * Sets the value of {@link HostGroupProperty#getGpuDriver}
             * @param gpuDriver the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder gpuDriver(java.lang.String gpuDriver) {
                this.gpuDriver = gpuDriver;
                return this;
            }

            /**
             * Sets the value of {@link HostGroupProperty#getGpuDriver}
             * @param gpuDriver the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder gpuDriver(com.aliyun.ros.cdk.core.IResolvable gpuDriver) {
                this.gpuDriver = gpuDriver;
                return this;
            }

            /**
             * Sets the value of {@link HostGroupProperty#getHostGroupId}
             * @param hostGroupId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder hostGroupId(java.lang.String hostGroupId) {
                this.hostGroupId = hostGroupId;
                return this;
            }

            /**
             * Sets the value of {@link HostGroupProperty#getHostGroupId}
             * @param hostGroupId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder hostGroupId(com.aliyun.ros.cdk.core.IResolvable hostGroupId) {
                this.hostGroupId = hostGroupId;
                return this;
            }

            /**
             * Sets the value of {@link HostGroupProperty#getHostGroupName}
             * @param hostGroupName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder hostGroupName(java.lang.String hostGroupName) {
                this.hostGroupName = hostGroupName;
                return this;
            }

            /**
             * Sets the value of {@link HostGroupProperty#getHostGroupName}
             * @param hostGroupName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder hostGroupName(com.aliyun.ros.cdk.core.IResolvable hostGroupName) {
                this.hostGroupName = hostGroupName;
                return this;
            }

            /**
             * Sets the value of {@link HostGroupProperty#getHostKeyPairName}
             * @param hostKeyPairName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder hostKeyPairName(java.lang.String hostKeyPairName) {
                this.hostKeyPairName = hostKeyPairName;
                return this;
            }

            /**
             * Sets the value of {@link HostGroupProperty#getHostKeyPairName}
             * @param hostKeyPairName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder hostKeyPairName(com.aliyun.ros.cdk.core.IResolvable hostKeyPairName) {
                this.hostKeyPairName = hostKeyPairName;
                return this;
            }

            /**
             * Sets the value of {@link HostGroupProperty#getHostPassword}
             * @param hostPassword the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder hostPassword(java.lang.String hostPassword) {
                this.hostPassword = hostPassword;
                return this;
            }

            /**
             * Sets the value of {@link HostGroupProperty#getHostPassword}
             * @param hostPassword the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder hostPassword(com.aliyun.ros.cdk.core.IResolvable hostPassword) {
                this.hostPassword = hostPassword;
                return this;
            }

            /**
             * Sets the value of {@link HostGroupProperty#getPeriod}
             * @param period the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder period(java.lang.Number period) {
                this.period = period;
                return this;
            }

            /**
             * Sets the value of {@link HostGroupProperty#getPeriod}
             * @param period the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder period(com.aliyun.ros.cdk.core.IResolvable period) {
                this.period = period;
                return this;
            }

            /**
             * Sets the value of {@link HostGroupProperty#getVSwitchId}
             * @param vSwitchId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder vSwitchId(java.lang.String vSwitchId) {
                this.vSwitchId = vSwitchId;
                return this;
            }

            /**
             * Sets the value of {@link HostGroupProperty#getVSwitchId}
             * @param vSwitchId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder vSwitchId(com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
                this.vSwitchId = vSwitchId;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link HostGroupProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public HostGroupProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link HostGroupProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements HostGroupProperty {
            private final java.lang.Object chargeType;
            private final java.lang.Object diskCapacity;
            private final java.lang.Object diskCount;
            private final java.lang.Object diskType;
            private final java.lang.Object hostGroupType;
            private final java.lang.Object instanceType;
            private final java.lang.Object nodeCount;
            private final java.lang.Object sysDiskCapacity;
            private final java.lang.Object sysDiskType;
            private final java.lang.Object autoRenew;
            private final java.lang.Object clusterId;
            private final java.lang.Object comment;
            private final java.lang.Object createType;
            private final java.lang.Object gpuDriver;
            private final java.lang.Object hostGroupId;
            private final java.lang.Object hostGroupName;
            private final java.lang.Object hostKeyPairName;
            private final java.lang.Object hostPassword;
            private final java.lang.Object period;
            private final java.lang.Object vSwitchId;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.chargeType = software.amazon.jsii.Kernel.get(this, "chargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.diskCapacity = software.amazon.jsii.Kernel.get(this, "diskCapacity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.diskCount = software.amazon.jsii.Kernel.get(this, "diskCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.diskType = software.amazon.jsii.Kernel.get(this, "diskType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.hostGroupType = software.amazon.jsii.Kernel.get(this, "hostGroupType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.instanceType = software.amazon.jsii.Kernel.get(this, "instanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.nodeCount = software.amazon.jsii.Kernel.get(this, "nodeCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.sysDiskCapacity = software.amazon.jsii.Kernel.get(this, "sysDiskCapacity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.sysDiskType = software.amazon.jsii.Kernel.get(this, "sysDiskType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.autoRenew = software.amazon.jsii.Kernel.get(this, "autoRenew", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.clusterId = software.amazon.jsii.Kernel.get(this, "clusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.comment = software.amazon.jsii.Kernel.get(this, "comment", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.createType = software.amazon.jsii.Kernel.get(this, "createType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.gpuDriver = software.amazon.jsii.Kernel.get(this, "gpuDriver", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.hostGroupId = software.amazon.jsii.Kernel.get(this, "hostGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.hostGroupName = software.amazon.jsii.Kernel.get(this, "hostGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.hostKeyPairName = software.amazon.jsii.Kernel.get(this, "hostKeyPairName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.hostPassword = software.amazon.jsii.Kernel.get(this, "hostPassword", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.period = software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.chargeType = java.util.Objects.requireNonNull(builder.chargeType, "chargeType is required");
                this.diskCapacity = java.util.Objects.requireNonNull(builder.diskCapacity, "diskCapacity is required");
                this.diskCount = java.util.Objects.requireNonNull(builder.diskCount, "diskCount is required");
                this.diskType = java.util.Objects.requireNonNull(builder.diskType, "diskType is required");
                this.hostGroupType = java.util.Objects.requireNonNull(builder.hostGroupType, "hostGroupType is required");
                this.instanceType = java.util.Objects.requireNonNull(builder.instanceType, "instanceType is required");
                this.nodeCount = java.util.Objects.requireNonNull(builder.nodeCount, "nodeCount is required");
                this.sysDiskCapacity = java.util.Objects.requireNonNull(builder.sysDiskCapacity, "sysDiskCapacity is required");
                this.sysDiskType = java.util.Objects.requireNonNull(builder.sysDiskType, "sysDiskType is required");
                this.autoRenew = builder.autoRenew;
                this.clusterId = builder.clusterId;
                this.comment = builder.comment;
                this.createType = builder.createType;
                this.gpuDriver = builder.gpuDriver;
                this.hostGroupId = builder.hostGroupId;
                this.hostGroupName = builder.hostGroupName;
                this.hostKeyPairName = builder.hostKeyPairName;
                this.hostPassword = builder.hostPassword;
                this.period = builder.period;
                this.vSwitchId = builder.vSwitchId;
            }

            @Override
            public final java.lang.Object getChargeType() {
                return this.chargeType;
            }

            @Override
            public final java.lang.Object getDiskCapacity() {
                return this.diskCapacity;
            }

            @Override
            public final java.lang.Object getDiskCount() {
                return this.diskCount;
            }

            @Override
            public final java.lang.Object getDiskType() {
                return this.diskType;
            }

            @Override
            public final java.lang.Object getHostGroupType() {
                return this.hostGroupType;
            }

            @Override
            public final java.lang.Object getInstanceType() {
                return this.instanceType;
            }

            @Override
            public final java.lang.Object getNodeCount() {
                return this.nodeCount;
            }

            @Override
            public final java.lang.Object getSysDiskCapacity() {
                return this.sysDiskCapacity;
            }

            @Override
            public final java.lang.Object getSysDiskType() {
                return this.sysDiskType;
            }

            @Override
            public final java.lang.Object getAutoRenew() {
                return this.autoRenew;
            }

            @Override
            public final java.lang.Object getClusterId() {
                return this.clusterId;
            }

            @Override
            public final java.lang.Object getComment() {
                return this.comment;
            }

            @Override
            public final java.lang.Object getCreateType() {
                return this.createType;
            }

            @Override
            public final java.lang.Object getGpuDriver() {
                return this.gpuDriver;
            }

            @Override
            public final java.lang.Object getHostGroupId() {
                return this.hostGroupId;
            }

            @Override
            public final java.lang.Object getHostGroupName() {
                return this.hostGroupName;
            }

            @Override
            public final java.lang.Object getHostKeyPairName() {
                return this.hostKeyPairName;
            }

            @Override
            public final java.lang.Object getHostPassword() {
                return this.hostPassword;
            }

            @Override
            public final java.lang.Object getPeriod() {
                return this.period;
            }

            @Override
            public final java.lang.Object getVSwitchId() {
                return this.vSwitchId;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("chargeType", om.valueToTree(this.getChargeType()));
                data.set("diskCapacity", om.valueToTree(this.getDiskCapacity()));
                data.set("diskCount", om.valueToTree(this.getDiskCount()));
                data.set("diskType", om.valueToTree(this.getDiskType()));
                data.set("hostGroupType", om.valueToTree(this.getHostGroupType()));
                data.set("instanceType", om.valueToTree(this.getInstanceType()));
                data.set("nodeCount", om.valueToTree(this.getNodeCount()));
                data.set("sysDiskCapacity", om.valueToTree(this.getSysDiskCapacity()));
                data.set("sysDiskType", om.valueToTree(this.getSysDiskType()));
                if (this.getAutoRenew() != null) {
                    data.set("autoRenew", om.valueToTree(this.getAutoRenew()));
                }
                if (this.getClusterId() != null) {
                    data.set("clusterId", om.valueToTree(this.getClusterId()));
                }
                if (this.getComment() != null) {
                    data.set("comment", om.valueToTree(this.getComment()));
                }
                if (this.getCreateType() != null) {
                    data.set("createType", om.valueToTree(this.getCreateType()));
                }
                if (this.getGpuDriver() != null) {
                    data.set("gpuDriver", om.valueToTree(this.getGpuDriver()));
                }
                if (this.getHostGroupId() != null) {
                    data.set("hostGroupId", om.valueToTree(this.getHostGroupId()));
                }
                if (this.getHostGroupName() != null) {
                    data.set("hostGroupName", om.valueToTree(this.getHostGroupName()));
                }
                if (this.getHostKeyPairName() != null) {
                    data.set("hostKeyPairName", om.valueToTree(this.getHostKeyPairName()));
                }
                if (this.getHostPassword() != null) {
                    data.set("hostPassword", om.valueToTree(this.getHostPassword()));
                }
                if (this.getPeriod() != null) {
                    data.set("period", om.valueToTree(this.getPeriod()));
                }
                if (this.getVSwitchId() != null) {
                    data.set("vSwitchId", om.valueToTree(this.getVSwitchId()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-emr.RosCluster.HostGroupProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                HostGroupProperty.Jsii$Proxy that = (HostGroupProperty.Jsii$Proxy) o;

                if (!chargeType.equals(that.chargeType)) return false;
                if (!diskCapacity.equals(that.diskCapacity)) return false;
                if (!diskCount.equals(that.diskCount)) return false;
                if (!diskType.equals(that.diskType)) return false;
                if (!hostGroupType.equals(that.hostGroupType)) return false;
                if (!instanceType.equals(that.instanceType)) return false;
                if (!nodeCount.equals(that.nodeCount)) return false;
                if (!sysDiskCapacity.equals(that.sysDiskCapacity)) return false;
                if (!sysDiskType.equals(that.sysDiskType)) return false;
                if (this.autoRenew != null ? !this.autoRenew.equals(that.autoRenew) : that.autoRenew != null) return false;
                if (this.clusterId != null ? !this.clusterId.equals(that.clusterId) : that.clusterId != null) return false;
                if (this.comment != null ? !this.comment.equals(that.comment) : that.comment != null) return false;
                if (this.createType != null ? !this.createType.equals(that.createType) : that.createType != null) return false;
                if (this.gpuDriver != null ? !this.gpuDriver.equals(that.gpuDriver) : that.gpuDriver != null) return false;
                if (this.hostGroupId != null ? !this.hostGroupId.equals(that.hostGroupId) : that.hostGroupId != null) return false;
                if (this.hostGroupName != null ? !this.hostGroupName.equals(that.hostGroupName) : that.hostGroupName != null) return false;
                if (this.hostKeyPairName != null ? !this.hostKeyPairName.equals(that.hostKeyPairName) : that.hostKeyPairName != null) return false;
                if (this.hostPassword != null ? !this.hostPassword.equals(that.hostPassword) : that.hostPassword != null) return false;
                if (this.period != null ? !this.period.equals(that.period) : that.period != null) return false;
                return this.vSwitchId != null ? this.vSwitchId.equals(that.vSwitchId) : that.vSwitchId == null;
            }

            @Override
            public final int hashCode() {
                int result = this.chargeType.hashCode();
                result = 31 * result + (this.diskCapacity.hashCode());
                result = 31 * result + (this.diskCount.hashCode());
                result = 31 * result + (this.diskType.hashCode());
                result = 31 * result + (this.hostGroupType.hashCode());
                result = 31 * result + (this.instanceType.hashCode());
                result = 31 * result + (this.nodeCount.hashCode());
                result = 31 * result + (this.sysDiskCapacity.hashCode());
                result = 31 * result + (this.sysDiskType.hashCode());
                result = 31 * result + (this.autoRenew != null ? this.autoRenew.hashCode() : 0);
                result = 31 * result + (this.clusterId != null ? this.clusterId.hashCode() : 0);
                result = 31 * result + (this.comment != null ? this.comment.hashCode() : 0);
                result = 31 * result + (this.createType != null ? this.createType.hashCode() : 0);
                result = 31 * result + (this.gpuDriver != null ? this.gpuDriver.hashCode() : 0);
                result = 31 * result + (this.hostGroupId != null ? this.hostGroupId.hashCode() : 0);
                result = 31 * result + (this.hostGroupName != null ? this.hostGroupName.hashCode() : 0);
                result = 31 * result + (this.hostKeyPairName != null ? this.hostKeyPairName.hashCode() : 0);
                result = 31 * result + (this.hostPassword != null ? this.hostPassword.hashCode() : 0);
                result = 31 * result + (this.period != null ? this.period.hashCode() : 0);
                result = 31 * result + (this.vSwitchId != null ? this.vSwitchId.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.emr.$Module.class, fqn = "@alicloud/ros-cdk-emr.RosCluster.TagsProperty")
    @software.amazon.jsii.Jsii.Proxy(TagsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface TagsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getKey();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getValue() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link TagsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link TagsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<TagsProperty> {
            java.lang.Object key;
            java.lang.Object value;

            /**
             * Sets the value of {@link TagsProperty#getKey}
             * @param key the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(java.lang.String key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link TagsProperty#getKey}
             * @param key the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(com.aliyun.ros.cdk.core.IResolvable key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link TagsProperty#getValue}
             * @param value the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(java.lang.String value) {
                this.value = value;
                return this;
            }

            /**
             * Sets the value of {@link TagsProperty#getValue}
             * @param value the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(com.aliyun.ros.cdk.core.IResolvable value) {
                this.value = value;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link TagsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public TagsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link TagsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements TagsProperty {
            private final java.lang.Object key;
            private final java.lang.Object value;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.key = software.amazon.jsii.Kernel.get(this, "key", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.value = software.amazon.jsii.Kernel.get(this, "value", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.key = java.util.Objects.requireNonNull(builder.key, "key is required");
                this.value = builder.value;
            }

            @Override
            public final java.lang.Object getKey() {
                return this.key;
            }

            @Override
            public final java.lang.Object getValue() {
                return this.value;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("key", om.valueToTree(this.getKey()));
                if (this.getValue() != null) {
                    data.set("value", om.valueToTree(this.getValue()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-emr.RosCluster.TagsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                TagsProperty.Jsii$Proxy that = (TagsProperty.Jsii$Proxy) o;

                if (!key.equals(that.key)) return false;
                return this.value != null ? this.value.equals(that.value) : that.value == null;
            }

            @Override
            public final int hashCode() {
                int result = this.key.hashCode();
                result = 31 * result + (this.value != null ? this.value.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.emr.$Module.class, fqn = "@alicloud/ros-cdk-emr.RosCluster.UserInfoProperty")
    @software.amazon.jsii.Jsii.Proxy(UserInfoProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface UserInfoProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPassword() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getUserId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getUserName() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link UserInfoProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link UserInfoProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<UserInfoProperty> {
            java.lang.Object password;
            java.lang.Object userId;
            java.lang.Object userName;

            /**
             * Sets the value of {@link UserInfoProperty#getPassword}
             * @param password the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder password(java.lang.String password) {
                this.password = password;
                return this;
            }

            /**
             * Sets the value of {@link UserInfoProperty#getPassword}
             * @param password the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder password(com.aliyun.ros.cdk.core.IResolvable password) {
                this.password = password;
                return this;
            }

            /**
             * Sets the value of {@link UserInfoProperty#getUserId}
             * @param userId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder userId(java.lang.String userId) {
                this.userId = userId;
                return this;
            }

            /**
             * Sets the value of {@link UserInfoProperty#getUserId}
             * @param userId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder userId(com.aliyun.ros.cdk.core.IResolvable userId) {
                this.userId = userId;
                return this;
            }

            /**
             * Sets the value of {@link UserInfoProperty#getUserName}
             * @param userName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder userName(java.lang.String userName) {
                this.userName = userName;
                return this;
            }

            /**
             * Sets the value of {@link UserInfoProperty#getUserName}
             * @param userName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder userName(com.aliyun.ros.cdk.core.IResolvable userName) {
                this.userName = userName;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link UserInfoProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public UserInfoProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link UserInfoProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements UserInfoProperty {
            private final java.lang.Object password;
            private final java.lang.Object userId;
            private final java.lang.Object userName;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.password = software.amazon.jsii.Kernel.get(this, "password", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.userId = software.amazon.jsii.Kernel.get(this, "userId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.userName = software.amazon.jsii.Kernel.get(this, "userName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.password = builder.password;
                this.userId = builder.userId;
                this.userName = builder.userName;
            }

            @Override
            public final java.lang.Object getPassword() {
                return this.password;
            }

            @Override
            public final java.lang.Object getUserId() {
                return this.userId;
            }

            @Override
            public final java.lang.Object getUserName() {
                return this.userName;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getPassword() != null) {
                    data.set("password", om.valueToTree(this.getPassword()));
                }
                if (this.getUserId() != null) {
                    data.set("userId", om.valueToTree(this.getUserId()));
                }
                if (this.getUserName() != null) {
                    data.set("userName", om.valueToTree(this.getUserName()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-emr.RosCluster.UserInfoProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                UserInfoProperty.Jsii$Proxy that = (UserInfoProperty.Jsii$Proxy) o;

                if (this.password != null ? !this.password.equals(that.password) : that.password != null) return false;
                if (this.userId != null ? !this.userId.equals(that.userId) : that.userId != null) return false;
                return this.userName != null ? this.userName.equals(that.userName) : that.userName == null;
            }

            @Override
            public final int hashCode() {
                int result = this.password != null ? this.password.hashCode() : 0;
                result = 31 * result + (this.userId != null ? this.userId.hashCode() : 0);
                result = 31 * result + (this.userName != null ? this.userName.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.emr.RosCluster}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.emr.RosCluster> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
         * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.emr.RosClusterProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.emr.RosClusterProps.Builder();
        }

        /**
         * @return {@code this}
         * @param chargeType This parameter is required.
         */
        public Builder chargeType(final java.lang.String chargeType) {
            this.props.chargeType(chargeType);
            return this;
        }
        /**
         * @return {@code this}
         * @param chargeType This parameter is required.
         */
        public Builder chargeType(final com.aliyun.ros.cdk.core.IResolvable chargeType) {
            this.props.chargeType(chargeType);
            return this;
        }

        /**
         * @return {@code this}
         * @param clusterType This parameter is required.
         */
        public Builder clusterType(final java.lang.String clusterType) {
            this.props.clusterType(clusterType);
            return this;
        }
        /**
         * @return {@code this}
         * @param clusterType This parameter is required.
         */
        public Builder clusterType(final com.aliyun.ros.cdk.core.IResolvable clusterType) {
            this.props.clusterType(clusterType);
            return this;
        }

        /**
         * @return {@code this}
         * @param emrVer This parameter is required.
         */
        public Builder emrVer(final java.lang.String emrVer) {
            this.props.emrVer(emrVer);
            return this;
        }
        /**
         * @return {@code this}
         * @param emrVer This parameter is required.
         */
        public Builder emrVer(final com.aliyun.ros.cdk.core.IResolvable emrVer) {
            this.props.emrVer(emrVer);
            return this;
        }

        /**
         * @return {@code this}
         * @param hostGroup This parameter is required.
         */
        public Builder hostGroup(final com.aliyun.ros.cdk.core.IResolvable hostGroup) {
            this.props.hostGroup(hostGroup);
            return this;
        }
        /**
         * @return {@code this}
         * @param hostGroup This parameter is required.
         */
        public Builder hostGroup(final java.util.List<? extends java.lang.Object> hostGroup) {
            this.props.hostGroup(hostGroup);
            return this;
        }

        /**
         * @return {@code this}
         * @param name This parameter is required.
         */
        public Builder name(final java.lang.String name) {
            this.props.name(name);
            return this;
        }
        /**
         * @return {@code this}
         * @param name This parameter is required.
         */
        public Builder name(final com.aliyun.ros.cdk.core.IResolvable name) {
            this.props.name(name);
            return this;
        }

        /**
         * @return {@code this}
         * @param netType This parameter is required.
         */
        public Builder netType(final java.lang.String netType) {
            this.props.netType(netType);
            return this;
        }
        /**
         * @return {@code this}
         * @param netType This parameter is required.
         */
        public Builder netType(final com.aliyun.ros.cdk.core.IResolvable netType) {
            this.props.netType(netType);
            return this;
        }

        /**
         * @return {@code this}
         * @param useLocalMetaDb This parameter is required.
         */
        public Builder useLocalMetaDb(final java.lang.Boolean useLocalMetaDb) {
            this.props.useLocalMetaDb(useLocalMetaDb);
            return this;
        }
        /**
         * @return {@code this}
         * @param useLocalMetaDb This parameter is required.
         */
        public Builder useLocalMetaDb(final com.aliyun.ros.cdk.core.IResolvable useLocalMetaDb) {
            this.props.useLocalMetaDb(useLocalMetaDb);
            return this;
        }

        /**
         * @return {@code this}
         * @param zoneId This parameter is required.
         */
        public Builder zoneId(final java.lang.String zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }
        /**
         * @return {@code this}
         * @param zoneId This parameter is required.
         */
        public Builder zoneId(final com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }

        /**
         * @return {@code this}
         * @param authorizeContent This parameter is required.
         */
        public Builder authorizeContent(final java.lang.String authorizeContent) {
            this.props.authorizeContent(authorizeContent);
            return this;
        }
        /**
         * @return {@code this}
         * @param authorizeContent This parameter is required.
         */
        public Builder authorizeContent(final com.aliyun.ros.cdk.core.IResolvable authorizeContent) {
            this.props.authorizeContent(authorizeContent);
            return this;
        }

        /**
         * @return {@code this}
         * @param autoRenew This parameter is required.
         */
        public Builder autoRenew(final java.lang.Boolean autoRenew) {
            this.props.autoRenew(autoRenew);
            return this;
        }
        /**
         * @return {@code this}
         * @param autoRenew This parameter is required.
         */
        public Builder autoRenew(final com.aliyun.ros.cdk.core.IResolvable autoRenew) {
            this.props.autoRenew(autoRenew);
            return this;
        }

        /**
         * @return {@code this}
         * @param bootstrapAction This parameter is required.
         */
        public Builder bootstrapAction(final com.aliyun.ros.cdk.core.IResolvable bootstrapAction) {
            this.props.bootstrapAction(bootstrapAction);
            return this;
        }
        /**
         * @return {@code this}
         * @param bootstrapAction This parameter is required.
         */
        public Builder bootstrapAction(final java.util.List<? extends java.lang.Object> bootstrapAction) {
            this.props.bootstrapAction(bootstrapAction);
            return this;
        }

        /**
         * @return {@code this}
         * @param clickHouseConf This parameter is required.
         */
        public Builder clickHouseConf(final com.aliyun.ros.cdk.core.IResolvable clickHouseConf) {
            this.props.clickHouseConf(clickHouseConf);
            return this;
        }
        /**
         * @return {@code this}
         * @param clickHouseConf This parameter is required.
         */
        public Builder clickHouseConf(final java.util.Map<java.lang.String, ? extends java.lang.Object> clickHouseConf) {
            this.props.clickHouseConf(clickHouseConf);
            return this;
        }

        /**
         * @return {@code this}
         * @param config This parameter is required.
         */
        public Builder config(final com.aliyun.ros.cdk.core.IResolvable config) {
            this.props.config(config);
            return this;
        }
        /**
         * @return {@code this}
         * @param config This parameter is required.
         */
        public Builder config(final java.util.List<? extends java.lang.Object> config) {
            this.props.config(config);
            return this;
        }

        /**
         * @return {@code this}
         * @param configurations This parameter is required.
         */
        public Builder configurations(final java.lang.String configurations) {
            this.props.configurations(configurations);
            return this;
        }
        /**
         * @return {@code this}
         * @param configurations This parameter is required.
         */
        public Builder configurations(final com.aliyun.ros.cdk.core.IResolvable configurations) {
            this.props.configurations(configurations);
            return this;
        }

        /**
         * @return {@code this}
         * @param depositType This parameter is required.
         */
        public Builder depositType(final java.lang.String depositType) {
            this.props.depositType(depositType);
            return this;
        }
        /**
         * @return {@code this}
         * @param depositType This parameter is required.
         */
        public Builder depositType(final com.aliyun.ros.cdk.core.IResolvable depositType) {
            this.props.depositType(depositType);
            return this;
        }

        /**
         * @return {@code this}
         * @param easEnable This parameter is required.
         */
        public Builder easEnable(final java.lang.Boolean easEnable) {
            this.props.easEnable(easEnable);
            return this;
        }
        /**
         * @return {@code this}
         * @param easEnable This parameter is required.
         */
        public Builder easEnable(final com.aliyun.ros.cdk.core.IResolvable easEnable) {
            this.props.easEnable(easEnable);
            return this;
        }

        /**
         * @return {@code this}
         * @param highAvailabilityEnable This parameter is required.
         */
        public Builder highAvailabilityEnable(final java.lang.Boolean highAvailabilityEnable) {
            this.props.highAvailabilityEnable(highAvailabilityEnable);
            return this;
        }
        /**
         * @return {@code this}
         * @param highAvailabilityEnable This parameter is required.
         */
        public Builder highAvailabilityEnable(final com.aliyun.ros.cdk.core.IResolvable highAvailabilityEnable) {
            this.props.highAvailabilityEnable(highAvailabilityEnable);
            return this;
        }

        /**
         * @return {@code this}
         * @param initCustomHiveMetaDb This parameter is required.
         */
        public Builder initCustomHiveMetaDb(final java.lang.Boolean initCustomHiveMetaDb) {
            this.props.initCustomHiveMetaDb(initCustomHiveMetaDb);
            return this;
        }
        /**
         * @return {@code this}
         * @param initCustomHiveMetaDb This parameter is required.
         */
        public Builder initCustomHiveMetaDb(final com.aliyun.ros.cdk.core.IResolvable initCustomHiveMetaDb) {
            this.props.initCustomHiveMetaDb(initCustomHiveMetaDb);
            return this;
        }

        /**
         * @return {@code this}
         * @param instanceGeneration This parameter is required.
         */
        public Builder instanceGeneration(final java.lang.String instanceGeneration) {
            this.props.instanceGeneration(instanceGeneration);
            return this;
        }
        /**
         * @return {@code this}
         * @param instanceGeneration This parameter is required.
         */
        public Builder instanceGeneration(final com.aliyun.ros.cdk.core.IResolvable instanceGeneration) {
            this.props.instanceGeneration(instanceGeneration);
            return this;
        }

        /**
         * @return {@code this}
         * @param ioOptimized This parameter is required.
         */
        public Builder ioOptimized(final java.lang.Boolean ioOptimized) {
            this.props.ioOptimized(ioOptimized);
            return this;
        }
        /**
         * @return {@code this}
         * @param ioOptimized This parameter is required.
         */
        public Builder ioOptimized(final com.aliyun.ros.cdk.core.IResolvable ioOptimized) {
            this.props.ioOptimized(ioOptimized);
            return this;
        }

        /**
         * @return {@code this}
         * @param isOpenPublicIp This parameter is required.
         */
        public Builder isOpenPublicIp(final java.lang.Boolean isOpenPublicIp) {
            this.props.isOpenPublicIp(isOpenPublicIp);
            return this;
        }
        /**
         * @return {@code this}
         * @param isOpenPublicIp This parameter is required.
         */
        public Builder isOpenPublicIp(final com.aliyun.ros.cdk.core.IResolvable isOpenPublicIp) {
            this.props.isOpenPublicIp(isOpenPublicIp);
            return this;
        }

        /**
         * @return {@code this}
         * @param keyPairName This parameter is required.
         */
        public Builder keyPairName(final java.lang.String keyPairName) {
            this.props.keyPairName(keyPairName);
            return this;
        }
        /**
         * @return {@code this}
         * @param keyPairName This parameter is required.
         */
        public Builder keyPairName(final com.aliyun.ros.cdk.core.IResolvable keyPairName) {
            this.props.keyPairName(keyPairName);
            return this;
        }

        /**
         * @return {@code this}
         * @param logPath This parameter is required.
         */
        public Builder logPath(final java.lang.String logPath) {
            this.props.logPath(logPath);
            return this;
        }
        /**
         * @return {@code this}
         * @param logPath This parameter is required.
         */
        public Builder logPath(final com.aliyun.ros.cdk.core.IResolvable logPath) {
            this.props.logPath(logPath);
            return this;
        }

        /**
         * @return {@code this}
         * @param machineType This parameter is required.
         */
        public Builder machineType(final java.lang.String machineType) {
            this.props.machineType(machineType);
            return this;
        }
        /**
         * @return {@code this}
         * @param machineType This parameter is required.
         */
        public Builder machineType(final com.aliyun.ros.cdk.core.IResolvable machineType) {
            this.props.machineType(machineType);
            return this;
        }

        /**
         * @return {@code this}
         * @param masterPwd This parameter is required.
         */
        public Builder masterPwd(final java.lang.String masterPwd) {
            this.props.masterPwd(masterPwd);
            return this;
        }
        /**
         * @return {@code this}
         * @param masterPwd This parameter is required.
         */
        public Builder masterPwd(final com.aliyun.ros.cdk.core.IResolvable masterPwd) {
            this.props.masterPwd(masterPwd);
            return this;
        }

        /**
         * @return {@code this}
         * @param metaStoreConf This parameter is required.
         */
        public Builder metaStoreConf(final java.lang.String metaStoreConf) {
            this.props.metaStoreConf(metaStoreConf);
            return this;
        }
        /**
         * @return {@code this}
         * @param metaStoreConf This parameter is required.
         */
        public Builder metaStoreConf(final com.aliyun.ros.cdk.core.IResolvable metaStoreConf) {
            this.props.metaStoreConf(metaStoreConf);
            return this;
        }

        /**
         * @return {@code this}
         * @param metaStoreType This parameter is required.
         */
        public Builder metaStoreType(final java.lang.String metaStoreType) {
            this.props.metaStoreType(metaStoreType);
            return this;
        }
        /**
         * @return {@code this}
         * @param metaStoreType This parameter is required.
         */
        public Builder metaStoreType(final com.aliyun.ros.cdk.core.IResolvable metaStoreType) {
            this.props.metaStoreType(metaStoreType);
            return this;
        }

        /**
         * @return {@code this}
         * @param optionSoftWareList This parameter is required.
         */
        public Builder optionSoftWareList(final com.aliyun.ros.cdk.core.IResolvable optionSoftWareList) {
            this.props.optionSoftWareList(optionSoftWareList);
            return this;
        }
        /**
         * @return {@code this}
         * @param optionSoftWareList This parameter is required.
         */
        public Builder optionSoftWareList(final java.util.List<? extends java.lang.Object> optionSoftWareList) {
            this.props.optionSoftWareList(optionSoftWareList);
            return this;
        }

        /**
         * @return {@code this}
         * @param period This parameter is required.
         */
        public Builder period(final java.lang.Number period) {
            this.props.period(period);
            return this;
        }
        /**
         * @return {@code this}
         * @param period This parameter is required.
         */
        public Builder period(final com.aliyun.ros.cdk.core.IResolvable period) {
            this.props.period(period);
            return this;
        }

        /**
         * @return {@code this}
         * @param relatedClusterId This parameter is required.
         */
        public Builder relatedClusterId(final java.lang.String relatedClusterId) {
            this.props.relatedClusterId(relatedClusterId);
            return this;
        }
        /**
         * @return {@code this}
         * @param relatedClusterId This parameter is required.
         */
        public Builder relatedClusterId(final com.aliyun.ros.cdk.core.IResolvable relatedClusterId) {
            this.props.relatedClusterId(relatedClusterId);
            return this;
        }

        /**
         * @return {@code this}
         * @param resourceGroupId This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * @return {@code this}
         * @param resourceGroupId This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * @return {@code this}
         * @param securityGroupId This parameter is required.
         */
        public Builder securityGroupId(final java.lang.String securityGroupId) {
            this.props.securityGroupId(securityGroupId);
            return this;
        }
        /**
         * @return {@code this}
         * @param securityGroupId This parameter is required.
         */
        public Builder securityGroupId(final com.aliyun.ros.cdk.core.IResolvable securityGroupId) {
            this.props.securityGroupId(securityGroupId);
            return this;
        }

        /**
         * @return {@code this}
         * @param securityGroupName This parameter is required.
         */
        public Builder securityGroupName(final java.lang.String securityGroupName) {
            this.props.securityGroupName(securityGroupName);
            return this;
        }
        /**
         * @return {@code this}
         * @param securityGroupName This parameter is required.
         */
        public Builder securityGroupName(final com.aliyun.ros.cdk.core.IResolvable securityGroupName) {
            this.props.securityGroupName(securityGroupName);
            return this;
        }

        /**
         * @return {@code this}
         * @param sshEnable This parameter is required.
         */
        public Builder sshEnable(final java.lang.Boolean sshEnable) {
            this.props.sshEnable(sshEnable);
            return this;
        }
        /**
         * @return {@code this}
         * @param sshEnable This parameter is required.
         */
        public Builder sshEnable(final com.aliyun.ros.cdk.core.IResolvable sshEnable) {
            this.props.sshEnable(sshEnable);
            return this;
        }

        /**
         * @return {@code this}
         * @param tags This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.emr.RosCluster.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * @return {@code this}
         * @param useCustomHiveMetaDb This parameter is required.
         */
        public Builder useCustomHiveMetaDb(final java.lang.Boolean useCustomHiveMetaDb) {
            this.props.useCustomHiveMetaDb(useCustomHiveMetaDb);
            return this;
        }
        /**
         * @return {@code this}
         * @param useCustomHiveMetaDb This parameter is required.
         */
        public Builder useCustomHiveMetaDb(final com.aliyun.ros.cdk.core.IResolvable useCustomHiveMetaDb) {
            this.props.useCustomHiveMetaDb(useCustomHiveMetaDb);
            return this;
        }

        /**
         * @return {@code this}
         * @param userDefinedEmrEcsRole This parameter is required.
         */
        public Builder userDefinedEmrEcsRole(final java.lang.String userDefinedEmrEcsRole) {
            this.props.userDefinedEmrEcsRole(userDefinedEmrEcsRole);
            return this;
        }
        /**
         * @return {@code this}
         * @param userDefinedEmrEcsRole This parameter is required.
         */
        public Builder userDefinedEmrEcsRole(final com.aliyun.ros.cdk.core.IResolvable userDefinedEmrEcsRole) {
            this.props.userDefinedEmrEcsRole(userDefinedEmrEcsRole);
            return this;
        }

        /**
         * @return {@code this}
         * @param userInfo This parameter is required.
         */
        public Builder userInfo(final com.aliyun.ros.cdk.core.IResolvable userInfo) {
            this.props.userInfo(userInfo);
            return this;
        }
        /**
         * @return {@code this}
         * @param userInfo This parameter is required.
         */
        public Builder userInfo(final java.util.List<? extends java.lang.Object> userInfo) {
            this.props.userInfo(userInfo);
            return this;
        }

        /**
         * @return {@code this}
         * @param vpcId This parameter is required.
         */
        public Builder vpcId(final java.lang.String vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }
        /**
         * @return {@code this}
         * @param vpcId This parameter is required.
         */
        public Builder vpcId(final com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }

        /**
         * @return {@code this}
         * @param vSwitchId This parameter is required.
         */
        public Builder vSwitchId(final java.lang.String vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }
        /**
         * @return {@code this}
         * @param vSwitchId This parameter is required.
         */
        public Builder vSwitchId(final com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }

        /**
         * @return {@code this}
         * @param whiteListType This parameter is required.
         */
        public Builder whiteListType(final java.lang.String whiteListType) {
            this.props.whiteListType(whiteListType);
            return this;
        }
        /**
         * @return {@code this}
         * @param whiteListType This parameter is required.
         */
        public Builder whiteListType(final com.aliyun.ros.cdk.core.IResolvable whiteListType) {
            this.props.whiteListType(whiteListType);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.emr.RosCluster}.
         */
        @Override
        public com.aliyun.ros.cdk.emr.RosCluster build() {
            return new com.aliyun.ros.cdk.emr.RosCluster(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
