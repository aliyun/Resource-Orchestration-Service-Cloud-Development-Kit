package com.aliyun.ros.cdk.threatdetection;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::ThreatDetection::ClientFileProtect</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-04-07T05:57:30.621Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.threatdetection.$Module.class, fqn = "@alicloud/ros-cdk-threatdetection.RosClientFileProtect")
public class RosClientFileProtect extends com.aliyun.ros.cdk.core.RosResource {

    protected RosClientFileProtect(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosClientFileProtect(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.threatdetection.RosClientFileProtect.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosClientFileProtect(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.RosClientFileProtectProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAlertLevel() {
        return software.amazon.jsii.Kernel.get(this, "attrAlertLevel", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrFileOps() {
        return software.amazon.jsii.Kernel.get(this, "attrFileOps", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrFilePaths() {
        return software.amazon.jsii.Kernel.get(this, "attrFilePaths", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPlatform() {
        return software.amazon.jsii.Kernel.get(this, "attrPlatform", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrProcPaths() {
        return software.amazon.jsii.Kernel.get(this, "attrProcPaths", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRuleAction() {
        return software.amazon.jsii.Kernel.get(this, "attrRuleAction", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRuleId() {
        return software.amazon.jsii.Kernel.get(this, "attrRuleId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRuleName() {
        return software.amazon.jsii.Kernel.get(this, "attrRuleName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSwitchId() {
        return software.amazon.jsii.Kernel.get(this, "attrSwitchId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getFileOps() {
        return software.amazon.jsii.Kernel.get(this, "fileOps", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setFileOps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "fileOps", java.util.Objects.requireNonNull(value, "fileOps is required"));
    }

    /**
     */
    public void setFileOps(final @org.jetbrains.annotations.NotNull java.util.List<java.lang.Object> value) {
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
        software.amazon.jsii.Kernel.set(this, "fileOps", java.util.Objects.requireNonNull(value, "fileOps is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getFilePaths() {
        return software.amazon.jsii.Kernel.get(this, "filePaths", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setFilePaths(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "filePaths", java.util.Objects.requireNonNull(value, "filePaths is required"));
    }

    /**
     */
    public void setFilePaths(final @org.jetbrains.annotations.NotNull java.util.List<java.lang.Object> value) {
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
        software.amazon.jsii.Kernel.set(this, "filePaths", java.util.Objects.requireNonNull(value, "filePaths is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getProcPaths() {
        return software.amazon.jsii.Kernel.get(this, "procPaths", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setProcPaths(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "procPaths", java.util.Objects.requireNonNull(value, "procPaths is required"));
    }

    /**
     */
    public void setProcPaths(final @org.jetbrains.annotations.NotNull java.util.List<java.lang.Object> value) {
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
        software.amazon.jsii.Kernel.set(this, "procPaths", java.util.Objects.requireNonNull(value, "procPaths is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getRuleAction() {
        return software.amazon.jsii.Kernel.get(this, "ruleAction", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRuleAction(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "ruleAction", java.util.Objects.requireNonNull(value, "ruleAction is required"));
    }

    /**
     */
    public void setRuleAction(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "ruleAction", java.util.Objects.requireNonNull(value, "ruleAction is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getRuleName() {
        return software.amazon.jsii.Kernel.get(this, "ruleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRuleName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "ruleName", java.util.Objects.requireNonNull(value, "ruleName is required"));
    }

    /**
     */
    public void setRuleName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "ruleName", java.util.Objects.requireNonNull(value, "ruleName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAlertLevel() {
        return software.amazon.jsii.Kernel.get(this, "alertLevel", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAlertLevel(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "alertLevel", value);
    }

    /**
     */
    public void setAlertLevel(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "alertLevel", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPlatform() {
        return software.amazon.jsii.Kernel.get(this, "platform", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPlatform(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "platform", value);
    }

    /**
     */
    public void setPlatform(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "platform", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getStatus() {
        return software.amazon.jsii.Kernel.get(this, "status", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setStatus(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "status", value);
    }

    /**
     */
    public void setStatus(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "status", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSwitchId() {
        return software.amazon.jsii.Kernel.get(this, "switchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSwitchId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "switchId", value);
    }

    /**
     */
    public void setSwitchId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "switchId", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.threatdetection.RosClientFileProtect}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.threatdetection.RosClientFileProtect> {
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
        private final com.aliyun.ros.cdk.threatdetection.RosClientFileProtectProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.threatdetection.RosClientFileProtectProps.Builder();
        }

        /**
         * @return {@code this}
         * @param fileOps This parameter is required.
         */
        public Builder fileOps(final com.aliyun.ros.cdk.core.IResolvable fileOps) {
            this.props.fileOps(fileOps);
            return this;
        }
        /**
         * @return {@code this}
         * @param fileOps This parameter is required.
         */
        public Builder fileOps(final java.util.List<? extends java.lang.Object> fileOps) {
            this.props.fileOps(fileOps);
            return this;
        }

        /**
         * @return {@code this}
         * @param filePaths This parameter is required.
         */
        public Builder filePaths(final com.aliyun.ros.cdk.core.IResolvable filePaths) {
            this.props.filePaths(filePaths);
            return this;
        }
        /**
         * @return {@code this}
         * @param filePaths This parameter is required.
         */
        public Builder filePaths(final java.util.List<? extends java.lang.Object> filePaths) {
            this.props.filePaths(filePaths);
            return this;
        }

        /**
         * @return {@code this}
         * @param procPaths This parameter is required.
         */
        public Builder procPaths(final com.aliyun.ros.cdk.core.IResolvable procPaths) {
            this.props.procPaths(procPaths);
            return this;
        }
        /**
         * @return {@code this}
         * @param procPaths This parameter is required.
         */
        public Builder procPaths(final java.util.List<? extends java.lang.Object> procPaths) {
            this.props.procPaths(procPaths);
            return this;
        }

        /**
         * @return {@code this}
         * @param ruleAction This parameter is required.
         */
        public Builder ruleAction(final java.lang.String ruleAction) {
            this.props.ruleAction(ruleAction);
            return this;
        }
        /**
         * @return {@code this}
         * @param ruleAction This parameter is required.
         */
        public Builder ruleAction(final com.aliyun.ros.cdk.core.IResolvable ruleAction) {
            this.props.ruleAction(ruleAction);
            return this;
        }

        /**
         * @return {@code this}
         * @param ruleName This parameter is required.
         */
        public Builder ruleName(final java.lang.String ruleName) {
            this.props.ruleName(ruleName);
            return this;
        }
        /**
         * @return {@code this}
         * @param ruleName This parameter is required.
         */
        public Builder ruleName(final com.aliyun.ros.cdk.core.IResolvable ruleName) {
            this.props.ruleName(ruleName);
            return this;
        }

        /**
         * @return {@code this}
         * @param alertLevel This parameter is required.
         */
        public Builder alertLevel(final java.lang.Number alertLevel) {
            this.props.alertLevel(alertLevel);
            return this;
        }
        /**
         * @return {@code this}
         * @param alertLevel This parameter is required.
         */
        public Builder alertLevel(final com.aliyun.ros.cdk.core.IResolvable alertLevel) {
            this.props.alertLevel(alertLevel);
            return this;
        }

        /**
         * @return {@code this}
         * @param platform This parameter is required.
         */
        public Builder platform(final java.lang.String platform) {
            this.props.platform(platform);
            return this;
        }
        /**
         * @return {@code this}
         * @param platform This parameter is required.
         */
        public Builder platform(final com.aliyun.ros.cdk.core.IResolvable platform) {
            this.props.platform(platform);
            return this;
        }

        /**
         * @return {@code this}
         * @param status This parameter is required.
         */
        public Builder status(final java.lang.Number status) {
            this.props.status(status);
            return this;
        }
        /**
         * @return {@code this}
         * @param status This parameter is required.
         */
        public Builder status(final com.aliyun.ros.cdk.core.IResolvable status) {
            this.props.status(status);
            return this;
        }

        /**
         * @return {@code this}
         * @param switchId This parameter is required.
         */
        public Builder switchId(final java.lang.String switchId) {
            this.props.switchId(switchId);
            return this;
        }
        /**
         * @return {@code this}
         * @param switchId This parameter is required.
         */
        public Builder switchId(final com.aliyun.ros.cdk.core.IResolvable switchId) {
            this.props.switchId(switchId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.threatdetection.RosClientFileProtect}.
         */
        @Override
        public com.aliyun.ros.cdk.threatdetection.RosClientFileProtect build() {
            return new com.aliyun.ros.cdk.threatdetection.RosClientFileProtect(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
