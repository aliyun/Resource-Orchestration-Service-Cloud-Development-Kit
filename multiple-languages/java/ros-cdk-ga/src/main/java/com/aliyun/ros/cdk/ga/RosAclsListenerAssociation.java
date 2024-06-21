package com.aliyun.ros.cdk.ga;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::GA::AclsListenerAssociation</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-21T05:59:10.201Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ga.$Module.class, fqn = "@alicloud/ros-cdk-ga.RosAclsListenerAssociation")
public class RosAclsListenerAssociation extends com.aliyun.ros.cdk.core.RosResource {

    protected RosAclsListenerAssociation(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosAclsListenerAssociation(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.ga.RosAclsListenerAssociation.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosAclsListenerAssociation(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ga.RosAclsListenerAssociationProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAclIds() {
        return software.amazon.jsii.Kernel.get(this, "attrAclIds", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrListenerId() {
        return software.amazon.jsii.Kernel.get(this, "attrListenerId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAclIds() {
        return software.amazon.jsii.Kernel.get(this, "aclIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAclIds(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "aclIds", java.util.Objects.requireNonNull(value, "aclIds is required"));
    }

    /**
     */
    public void setAclIds(final @org.jetbrains.annotations.NotNull java.util.List<java.lang.Object> value) {
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
        software.amazon.jsii.Kernel.set(this, "aclIds", java.util.Objects.requireNonNull(value, "aclIds is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAclType() {
        return software.amazon.jsii.Kernel.get(this, "aclType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAclType(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "aclType", java.util.Objects.requireNonNull(value, "aclType is required"));
    }

    /**
     */
    public void setAclType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "aclType", java.util.Objects.requireNonNull(value, "aclType is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getListenerId() {
        return software.amazon.jsii.Kernel.get(this, "listenerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setListenerId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "listenerId", java.util.Objects.requireNonNull(value, "listenerId is required"));
    }

    /**
     */
    public void setListenerId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "listenerId", java.util.Objects.requireNonNull(value, "listenerId is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ga.RosAclsListenerAssociation}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ga.RosAclsListenerAssociation> {
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
        private final com.aliyun.ros.cdk.ga.RosAclsListenerAssociationProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ga.RosAclsListenerAssociationProps.Builder();
        }

        /**
         * @return {@code this}
         * @param aclIds This parameter is required.
         */
        public Builder aclIds(final com.aliyun.ros.cdk.core.IResolvable aclIds) {
            this.props.aclIds(aclIds);
            return this;
        }
        /**
         * @return {@code this}
         * @param aclIds This parameter is required.
         */
        public Builder aclIds(final java.util.List<? extends java.lang.Object> aclIds) {
            this.props.aclIds(aclIds);
            return this;
        }

        /**
         * @return {@code this}
         * @param aclType This parameter is required.
         */
        public Builder aclType(final java.lang.String aclType) {
            this.props.aclType(aclType);
            return this;
        }
        /**
         * @return {@code this}
         * @param aclType This parameter is required.
         */
        public Builder aclType(final com.aliyun.ros.cdk.core.IResolvable aclType) {
            this.props.aclType(aclType);
            return this;
        }

        /**
         * @return {@code this}
         * @param listenerId This parameter is required.
         */
        public Builder listenerId(final java.lang.String listenerId) {
            this.props.listenerId(listenerId);
            return this;
        }
        /**
         * @return {@code this}
         * @param listenerId This parameter is required.
         */
        public Builder listenerId(final com.aliyun.ros.cdk.core.IResolvable listenerId) {
            this.props.listenerId(listenerId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ga.RosAclsListenerAssociation}.
         */
        @Override
        public com.aliyun.ros.cdk.ga.RosAclsListenerAssociation build() {
            return new com.aliyun.ros.cdk.ga.RosAclsListenerAssociation(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
