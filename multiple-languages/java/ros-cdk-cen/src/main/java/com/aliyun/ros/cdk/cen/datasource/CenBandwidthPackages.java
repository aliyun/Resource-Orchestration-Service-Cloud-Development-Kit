package com.aliyun.ros.cdk.cen.datasource;

/**
 * A ROS resource type:  <code>DATASOURCE::CEN::CenBandwidthPackages</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.88.0 (build eaabd08)", date = "2023-09-15T07:33:46.742Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cen.$Module.class, fqn = "@alicloud/ros-cdk-cen.datasource.CenBandwidthPackages")
public class CenBandwidthPackages extends com.aliyun.ros.cdk.core.Resource {

    protected CenBandwidthPackages(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected CenBandwidthPackages(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>DATASOURCE::CEN::CenBandwidthPackages</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     * @param enableResourcePropertyConstraint
     */
    public CenBandwidthPackages(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.cen.datasource.CenBandwidthPackagesProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props, enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>DATASOURCE::CEN::CenBandwidthPackages</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     */
    public CenBandwidthPackages(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.cen.datasource.CenBandwidthPackagesProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    /**
     * Create a new <code>DATASOURCE::CEN::CenBandwidthPackages</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     */
    public CenBandwidthPackages(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    /**
     * Attribute CenBandwidthPackageIds: The list of The Cen bandwidth ids.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCenBandwidthPackageIds() {
        return software.amazon.jsii.Kernel.get(this, "attrCenBandwidthPackageIds", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute CenBandwidthPackages: The information about CenBandwidthPackages.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCenBandwidthPackages() {
        return software.amazon.jsii.Kernel.get(this, "attrCenBandwidthPackages", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cen.datasource.CenBandwidthPackages}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cen.datasource.CenBandwidthPackages> {
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
        private com.aliyun.ros.cdk.cen.datasource.CenBandwidthPackagesProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        }

        /**
         * Property filter: Filter value when querying resources.
         * <p>
         * @return {@code this}
         * @param filter Property filter: Filter value when querying resources. This parameter is required.
         */
        public Builder filter(final com.aliyun.ros.cdk.core.IResolvable filter) {
            this.props().filter(filter);
            return this;
        }
        /**
         * Property filter: Filter value when querying resources.
         * <p>
         * @return {@code this}
         * @param filter Property filter: Filter value when querying resources. This parameter is required.
         */
        public Builder filter(final java.util.List<? extends java.lang.Object> filter) {
            this.props().filter(filter);
            return this;
        }

        /**
         * Property includeReservationData: Specifies whether to include renewal data.
         * <p>
         * @return {@code this}
         * @param includeReservationData Property includeReservationData: Specifies whether to include renewal data. This parameter is required.
         */
        public Builder includeReservationData(final java.lang.Boolean includeReservationData) {
            this.props().includeReservationData(includeReservationData);
            return this;
        }
        /**
         * Property includeReservationData: Specifies whether to include renewal data.
         * <p>
         * @return {@code this}
         * @param includeReservationData Property includeReservationData: Specifies whether to include renewal data. This parameter is required.
         */
        public Builder includeReservationData(final com.aliyun.ros.cdk.core.IResolvable includeReservationData) {
            this.props().includeReservationData(includeReservationData);
            return this;
        }

        /**
         * Property isOrKey: The logical operator between the filter conditions.
         * <p>
         * @return {@code this}
         * @param isOrKey Property isOrKey: The logical operator between the filter conditions. This parameter is required.
         */
        public Builder isOrKey(final java.lang.Boolean isOrKey) {
            this.props().isOrKey(isOrKey);
            return this;
        }
        /**
         * Property isOrKey: The logical operator between the filter conditions.
         * <p>
         * @return {@code this}
         * @param isOrKey Property isOrKey: The logical operator between the filter conditions. This parameter is required.
         */
        public Builder isOrKey(final com.aliyun.ros.cdk.core.IResolvable isOrKey) {
            this.props().isOrKey(isOrKey);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cen.datasource.CenBandwidthPackages}.
         */
        @Override
        public com.aliyun.ros.cdk.cen.datasource.CenBandwidthPackages build() {
            return new com.aliyun.ros.cdk.cen.datasource.CenBandwidthPackages(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null,
                this.enableResourcePropertyConstraint
            );
        }

        private com.aliyun.ros.cdk.cen.datasource.CenBandwidthPackagesProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.cen.datasource.CenBandwidthPackagesProps.Builder();
            }
            return this.props;
        }
    }
}
