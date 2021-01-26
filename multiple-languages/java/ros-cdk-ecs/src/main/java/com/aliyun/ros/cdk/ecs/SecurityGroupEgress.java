package com.aliyun.ros.cdk.ecs;

/**
 * A ROS resource type:  `ALIYUN::ECS::SecurityGroupEgress`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T03:36:10.079Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.SecurityGroupEgress")
public class SecurityGroupEgress extends com.aliyun.ros.cdk.core.Resource {

    protected SecurityGroupEgress(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected SecurityGroupEgress(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::ECS::SecurityGroupEgress`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public SecurityGroupEgress(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.SecurityGroupEgressProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::ECS::SecurityGroupEgress`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     */
    public SecurityGroupEgress(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.SecurityGroupEgressProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ecs.SecurityGroupEgress}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ecs.SecurityGroupEgress> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope - scope in which this resource is defined. This parameter is required.
         * @param id - scoped id of the resource. This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope - scope in which this resource is defined. This parameter is required.
         * @param id - scoped id of the resource. This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id, null);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.ecs.SecurityGroupEgressProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ecs.SecurityGroupEgressProps.Builder();
        }

        /**
         * @return {@code this}
         * @param ipProtocol This parameter is required.
         */
        public Builder ipProtocol(final java.lang.String ipProtocol) {
            this.props.ipProtocol(ipProtocol);
            return this;
        }

        /**
         * @return {@code this}
         * @param portRange This parameter is required.
         */
        public Builder portRange(final java.lang.String portRange) {
            this.props.portRange(portRange);
            return this;
        }

        /**
         * @return {@code this}
         * @param description This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }

        /**
         * @return {@code this}
         * @param destCidrIp This parameter is required.
         */
        public Builder destCidrIp(final java.lang.String destCidrIp) {
            this.props.destCidrIp(destCidrIp);
            return this;
        }

        /**
         * @return {@code this}
         * @param destGroupId This parameter is required.
         */
        public Builder destGroupId(final java.lang.String destGroupId) {
            this.props.destGroupId(destGroupId);
            return this;
        }

        /**
         * @return {@code this}
         * @param destGroupOwnerId This parameter is required.
         */
        public Builder destGroupOwnerId(final java.lang.String destGroupOwnerId) {
            this.props.destGroupOwnerId(destGroupOwnerId);
            return this;
        }

        /**
         * @return {@code this}
         * @param ipv6DestCidrIp This parameter is required.
         */
        public Builder ipv6DestCidrIp(final java.lang.String ipv6DestCidrIp) {
            this.props.ipv6DestCidrIp(ipv6DestCidrIp);
            return this;
        }

        /**
         * @return {@code this}
         * @param nicType This parameter is required.
         */
        public Builder nicType(final java.lang.String nicType) {
            this.props.nicType(nicType);
            return this;
        }

        /**
         * @return {@code this}
         * @param policy This parameter is required.
         */
        public Builder policy(final java.lang.String policy) {
            this.props.policy(policy);
            return this;
        }

        /**
         * @return {@code this}
         * @param priority This parameter is required.
         */
        public Builder priority(final java.lang.Number priority) {
            this.props.priority(priority);
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
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.ecs.SecurityGroupEgress}.
         */
        @Override
        public com.aliyun.ros.cdk.ecs.SecurityGroupEgress build() {
            return new com.aliyun.ros.cdk.ecs.SecurityGroupEgress(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
