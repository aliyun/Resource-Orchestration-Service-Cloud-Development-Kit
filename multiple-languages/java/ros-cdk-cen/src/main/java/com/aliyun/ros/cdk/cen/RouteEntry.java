package com.aliyun.ros.cdk.cen;

/**
 * A ROS resource type:  <code>ALIYUN::CEN::RouteEntry</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-09-15T09:57:23.790Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cen.$Module.class, fqn = "@alicloud/ros-cdk-cen.RouteEntry")
public class RouteEntry extends com.aliyun.ros.cdk.core.Resource {

    protected RouteEntry(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RouteEntry(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>ALIYUN::CEN::RouteEntry</code>.
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
    public RouteEntry(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cen.RouteEntryProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>ALIYUN::CEN::RouteEntry</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public RouteEntry(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cen.RouteEntryProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cen.RouteEntry}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cen.RouteEntry> {
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
        private final com.aliyun.ros.cdk.cen.RouteEntryProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cen.RouteEntryProps.Builder();
        }

        /**
         * Property cenId: The ID of the CEN instance where the route entry is published.
         * <p>
         * @return {@code this}
         * @param cenId Property cenId: The ID of the CEN instance where the route entry is published. This parameter is required.
         */
        public Builder cenId(final java.lang.String cenId) {
            this.props.cenId(cenId);
            return this;
        }
        /**
         * Property cenId: The ID of the CEN instance where the route entry is published.
         * <p>
         * @return {@code this}
         * @param cenId Property cenId: The ID of the CEN instance where the route entry is published. This parameter is required.
         */
        public Builder cenId(final com.aliyun.ros.cdk.core.IResolvable cenId) {
            this.props.cenId(cenId);
            return this;
        }

        /**
         * Property childInstanceId: The ID of the attached network (VPC or VBR).
         * <p>
         * @return {@code this}
         * @param childInstanceId Property childInstanceId: The ID of the attached network (VPC or VBR). This parameter is required.
         */
        public Builder childInstanceId(final java.lang.String childInstanceId) {
            this.props.childInstanceId(childInstanceId);
            return this;
        }
        /**
         * Property childInstanceId: The ID of the attached network (VPC or VBR).
         * <p>
         * @return {@code this}
         * @param childInstanceId Property childInstanceId: The ID of the attached network (VPC or VBR). This parameter is required.
         */
        public Builder childInstanceId(final com.aliyun.ros.cdk.core.IResolvable childInstanceId) {
            this.props.childInstanceId(childInstanceId);
            return this;
        }

        /**
         * Property childInstanceRegionId: The ID of the region where the attached VBR or VPC is located.
         * <p>
         * @return {@code this}
         * @param childInstanceRegionId Property childInstanceRegionId: The ID of the region where the attached VBR or VPC is located. This parameter is required.
         */
        public Builder childInstanceRegionId(final java.lang.String childInstanceRegionId) {
            this.props.childInstanceRegionId(childInstanceRegionId);
            return this;
        }
        /**
         * Property childInstanceRegionId: The ID of the region where the attached VBR or VPC is located.
         * <p>
         * @return {@code this}
         * @param childInstanceRegionId Property childInstanceRegionId: The ID of the region where the attached VBR or VPC is located. This parameter is required.
         */
        public Builder childInstanceRegionId(final com.aliyun.ros.cdk.core.IResolvable childInstanceRegionId) {
            this.props.childInstanceRegionId(childInstanceRegionId);
            return this;
        }

        /**
         * Property childInstanceRouteTableId: The route table of the attached VBR or VPC.
         * <p>
         * @return {@code this}
         * @param childInstanceRouteTableId Property childInstanceRouteTableId: The route table of the attached VBR or VPC. This parameter is required.
         */
        public Builder childInstanceRouteTableId(final java.lang.String childInstanceRouteTableId) {
            this.props.childInstanceRouteTableId(childInstanceRouteTableId);
            return this;
        }
        /**
         * Property childInstanceRouteTableId: The route table of the attached VBR or VPC.
         * <p>
         * @return {@code this}
         * @param childInstanceRouteTableId Property childInstanceRouteTableId: The route table of the attached VBR or VPC. This parameter is required.
         */
        public Builder childInstanceRouteTableId(final com.aliyun.ros.cdk.core.IResolvable childInstanceRouteTableId) {
            this.props.childInstanceRouteTableId(childInstanceRouteTableId);
            return this;
        }

        /**
         * Property childInstanceType: The type of the network, value: VPC VBR.
         * <p>
         * @return {@code this}
         * @param childInstanceType Property childInstanceType: The type of the network, value: VPC VBR. This parameter is required.
         */
        public Builder childInstanceType(final java.lang.String childInstanceType) {
            this.props.childInstanceType(childInstanceType);
            return this;
        }
        /**
         * Property childInstanceType: The type of the network, value: VPC VBR.
         * <p>
         * @return {@code this}
         * @param childInstanceType Property childInstanceType: The type of the network, value: VPC VBR. This parameter is required.
         */
        public Builder childInstanceType(final com.aliyun.ros.cdk.core.IResolvable childInstanceType) {
            this.props.childInstanceType(childInstanceType);
            return this;
        }

        /**
         * Property destinationCidrBlock: The destination CIDR block of the route entry to publish.
         * <p>
         * @return {@code this}
         * @param destinationCidrBlock Property destinationCidrBlock: The destination CIDR block of the route entry to publish. This parameter is required.
         */
        public Builder destinationCidrBlock(final java.lang.String destinationCidrBlock) {
            this.props.destinationCidrBlock(destinationCidrBlock);
            return this;
        }
        /**
         * Property destinationCidrBlock: The destination CIDR block of the route entry to publish.
         * <p>
         * @return {@code this}
         * @param destinationCidrBlock Property destinationCidrBlock: The destination CIDR block of the route entry to publish. This parameter is required.
         */
        public Builder destinationCidrBlock(final com.aliyun.ros.cdk.core.IResolvable destinationCidrBlock) {
            this.props.destinationCidrBlock(destinationCidrBlock);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cen.RouteEntry}.
         */
        @Override
        public com.aliyun.ros.cdk.cen.RouteEntry build() {
            return new com.aliyun.ros.cdk.cen.RouteEntry(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
