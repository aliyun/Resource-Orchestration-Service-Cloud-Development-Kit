package com.aliyun.ros.cdk.apigateway;

/**
 * A ROS resource type:  `ALIYUN::ApiGateway::TrafficControlBinding`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.55.1 (build 07d2d90)", date = "2022-03-28T07:49:01.462Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apigateway.$Module.class, fqn = "@alicloud/ros-cdk-apigateway.TrafficControlBinding")
public class TrafficControlBinding extends com.aliyun.ros.cdk.core.Resource {

    protected TrafficControlBinding(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected TrafficControlBinding(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::ApiGateway::TrafficControlBinding`.
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
    public TrafficControlBinding(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apigateway.TrafficControlBindingProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::ApiGateway::TrafficControlBinding`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public TrafficControlBinding(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apigateway.TrafficControlBindingProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.apigateway.TrafficControlBinding}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.apigateway.TrafficControlBinding> {
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
        private final com.aliyun.ros.cdk.apigateway.TrafficControlBindingProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.apigateway.TrafficControlBindingProps.Builder();
        }

        /**
         * Property apiIds: APIs to bind with the traffic control.
         * <p>
         * @return {@code this}
         * @param apiIds Property apiIds: APIs to bind with the traffic control. This parameter is required.
         */
        public Builder apiIds(final java.util.List<? extends java.lang.Object> apiIds) {
            this.props.apiIds(apiIds);
            return this;
        }
        /**
         * Property apiIds: APIs to bind with the traffic control.
         * <p>
         * @return {@code this}
         * @param apiIds Property apiIds: APIs to bind with the traffic control. This parameter is required.
         */
        public Builder apiIds(final com.aliyun.ros.cdk.core.IResolvable apiIds) {
            this.props.apiIds(apiIds);
            return this;
        }

        /**
         * Property groupId: The id of group.
         * <p>
         * @return {@code this}
         * @param groupId Property groupId: The id of group. This parameter is required.
         */
        public Builder groupId(final java.lang.String groupId) {
            this.props.groupId(groupId);
            return this;
        }
        /**
         * Property groupId: The id of group.
         * <p>
         * @return {@code this}
         * @param groupId Property groupId: The id of group. This parameter is required.
         */
        public Builder groupId(final com.aliyun.ros.cdk.core.IResolvable groupId) {
            this.props.groupId(groupId);
            return this;
        }

        /**
         * Property stageName: Bind traffic in this stage.
         * <p>
         * @return {@code this}
         * @param stageName Property stageName: Bind traffic in this stage. This parameter is required.
         */
        public Builder stageName(final java.lang.String stageName) {
            this.props.stageName(stageName);
            return this;
        }
        /**
         * Property stageName: Bind traffic in this stage.
         * <p>
         * @return {@code this}
         * @param stageName Property stageName: Bind traffic in this stage. This parameter is required.
         */
        public Builder stageName(final com.aliyun.ros.cdk.core.IResolvable stageName) {
            this.props.stageName(stageName);
            return this;
        }

        /**
         * Property trafficControlId: The id of traffic control.
         * <p>
         * @return {@code this}
         * @param trafficControlId Property trafficControlId: The id of traffic control. This parameter is required.
         */
        public Builder trafficControlId(final java.lang.String trafficControlId) {
            this.props.trafficControlId(trafficControlId);
            return this;
        }
        /**
         * Property trafficControlId: The id of traffic control.
         * <p>
         * @return {@code this}
         * @param trafficControlId Property trafficControlId: The id of traffic control. This parameter is required.
         */
        public Builder trafficControlId(final com.aliyun.ros.cdk.core.IResolvable trafficControlId) {
            this.props.trafficControlId(trafficControlId);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.apigateway.TrafficControlBinding}.
         */
        @Override
        public com.aliyun.ros.cdk.apigateway.TrafficControlBinding build() {
            return new com.aliyun.ros.cdk.apigateway.TrafficControlBinding(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
