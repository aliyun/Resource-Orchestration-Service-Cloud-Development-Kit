package com.aliyun.ros.cdk.cen;

/**
 * A ROS resource type:  `ALIYUN::CEN::CenBandwidthLimit`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.70.0 (build 03c2f6f)", date = "2022-11-04T06:18:41.226Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cen.$Module.class, fqn = "@alicloud/ros-cdk-cen.CenBandwidthLimit")
public class CenBandwidthLimit extends com.aliyun.ros.cdk.core.Resource {

    protected CenBandwidthLimit(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected CenBandwidthLimit(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::CEN::CenBandwidthLimit`.
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
    public CenBandwidthLimit(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cen.CenBandwidthLimitProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::CEN::CenBandwidthLimit`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public CenBandwidthLimit(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cen.CenBandwidthLimitProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cen.CenBandwidthLimit}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cen.CenBandwidthLimit> {
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
        private final com.aliyun.ros.cdk.cen.CenBandwidthLimitProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cen.CenBandwidthLimitProps.Builder();
        }

        /**
         * Property bandwidthLimit: The bandwidth configured for the interconnected regions communication.
         * <p>
         * Minimal value: 1
         * <p>
         * @return {@code this}
         * @param bandwidthLimit Property bandwidthLimit: The bandwidth configured for the interconnected regions communication. This parameter is required.
         */
        public Builder bandwidthLimit(final java.lang.Number bandwidthLimit) {
            this.props.bandwidthLimit(bandwidthLimit);
            return this;
        }
        /**
         * Property bandwidthLimit: The bandwidth configured for the interconnected regions communication.
         * <p>
         * Minimal value: 1
         * <p>
         * @return {@code this}
         * @param bandwidthLimit Property bandwidthLimit: The bandwidth configured for the interconnected regions communication. This parameter is required.
         */
        public Builder bandwidthLimit(final com.aliyun.ros.cdk.core.IResolvable bandwidthLimit) {
            this.props.bandwidthLimit(bandwidthLimit);
            return this;
        }

        /**
         * Property cenId: The ID of the CEN instance.
         * <p>
         * @return {@code this}
         * @param cenId Property cenId: The ID of the CEN instance. This parameter is required.
         */
        public Builder cenId(final java.lang.String cenId) {
            this.props.cenId(cenId);
            return this;
        }
        /**
         * Property cenId: The ID of the CEN instance.
         * <p>
         * @return {@code this}
         * @param cenId Property cenId: The ID of the CEN instance. This parameter is required.
         */
        public Builder cenId(final com.aliyun.ros.cdk.core.IResolvable cenId) {
            this.props.cenId(cenId);
            return this;
        }

        /**
         * Property localRegionId: The ID of the local region.
         * <p>
         * @return {@code this}
         * @param localRegionId Property localRegionId: The ID of the local region. This parameter is required.
         */
        public Builder localRegionId(final java.lang.String localRegionId) {
            this.props.localRegionId(localRegionId);
            return this;
        }
        /**
         * Property localRegionId: The ID of the local region.
         * <p>
         * @return {@code this}
         * @param localRegionId Property localRegionId: The ID of the local region. This parameter is required.
         */
        public Builder localRegionId(final com.aliyun.ros.cdk.core.IResolvable localRegionId) {
            this.props.localRegionId(localRegionId);
            return this;
        }

        /**
         * Property oppositeRegionId: The ID of the other interconnected region.
         * <p>
         * @return {@code this}
         * @param oppositeRegionId Property oppositeRegionId: The ID of the other interconnected region. This parameter is required.
         */
        public Builder oppositeRegionId(final java.lang.String oppositeRegionId) {
            this.props.oppositeRegionId(oppositeRegionId);
            return this;
        }
        /**
         * Property oppositeRegionId: The ID of the other interconnected region.
         * <p>
         * @return {@code this}
         * @param oppositeRegionId Property oppositeRegionId: The ID of the other interconnected region. This parameter is required.
         */
        public Builder oppositeRegionId(final com.aliyun.ros.cdk.core.IResolvable oppositeRegionId) {
            this.props.oppositeRegionId(oppositeRegionId);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.cen.CenBandwidthLimit}.
         */
        @Override
        public com.aliyun.ros.cdk.cen.CenBandwidthLimit build() {
            return new com.aliyun.ros.cdk.cen.CenBandwidthLimit(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
