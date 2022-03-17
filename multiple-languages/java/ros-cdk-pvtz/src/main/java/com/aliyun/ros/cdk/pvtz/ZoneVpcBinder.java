package com.aliyun.ros.cdk.pvtz;

/**
 * A ROS resource type:  `ALIYUN::PVTZ::ZoneVpcBinder`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.55.1 (build 07d2d90)", date = "2022-03-17T08:21:16.103Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.pvtz.$Module.class, fqn = "@alicloud/ros-cdk-pvtz.ZoneVpcBinder")
public class ZoneVpcBinder extends com.aliyun.ros.cdk.core.Resource {

    protected ZoneVpcBinder(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected ZoneVpcBinder(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::PVTZ::ZoneVpcBinder`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public ZoneVpcBinder(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.pvtz.ZoneVpcBinderProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::PVTZ::ZoneVpcBinder`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public ZoneVpcBinder(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.pvtz.ZoneVpcBinderProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute Vpcs: Vpc list.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVpcs() {
        return software.amazon.jsii.Kernel.get(this, "attrVpcs", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ZoneId: Zone Id.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrZoneId() {
        return software.amazon.jsii.Kernel.get(this, "attrZoneId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.pvtz.ZoneVpcBinder}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.pvtz.ZoneVpcBinder> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id, null);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.pvtz.ZoneVpcBinderProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.pvtz.ZoneVpcBinderProps.Builder();
        }

        /**
         * Property vpcs:.
         * <p>
         * @return {@code this}
         * @param vpcs Property vpcs:. This parameter is required.
         */
        public Builder vpcs(final com.aliyun.ros.cdk.core.IResolvable vpcs) {
            this.props.vpcs(vpcs);
            return this;
        }
        /**
         * Property vpcs:.
         * <p>
         * @return {@code this}
         * @param vpcs Property vpcs:. This parameter is required.
         */
        public Builder vpcs(final java.util.List<? extends java.lang.Object> vpcs) {
            this.props.vpcs(vpcs);
            return this;
        }

        /**
         * Property zoneId: Zone Id.
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: Zone Id. This parameter is required.
         */
        public Builder zoneId(final java.lang.String zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }
        /**
         * Property zoneId: Zone Id.
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: Zone Id. This parameter is required.
         */
        public Builder zoneId(final com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.pvtz.ZoneVpcBinder}.
         */
        @Override
        public com.aliyun.ros.cdk.pvtz.ZoneVpcBinder build() {
            return new com.aliyun.ros.cdk.pvtz.ZoneVpcBinder(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
