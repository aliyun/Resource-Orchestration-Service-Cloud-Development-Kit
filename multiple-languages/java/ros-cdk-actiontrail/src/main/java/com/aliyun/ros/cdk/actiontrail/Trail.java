package com.aliyun.ros.cdk.actiontrail;

/**
 * A ROS resource type:  `ALIYUN::ACTIONTRAIL::Trail`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.62.0 (build 293ac17)", date = "2022-07-21T02:24:23.496Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.actiontrail.$Module.class, fqn = "@alicloud/ros-cdk-actiontrail.Trail")
public class Trail extends com.aliyun.ros.cdk.core.Resource {

    protected Trail(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Trail(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::ACTIONTRAIL::Trail`.
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
    public Trail(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.actiontrail.TrailProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::ACTIONTRAIL::Trail`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public Trail(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.actiontrail.TrailProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute Name: The name of the trail to be created, which must be unique for an account.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrName() {
        return software.amazon.jsii.Kernel.get(this, "attrName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.actiontrail.Trail}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.actiontrail.Trail> {
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
        private final com.aliyun.ros.cdk.actiontrail.TrailProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.actiontrail.TrailProps.Builder();
        }

        /**
         * Property name: The name of the trail to be created, which must be unique for an account.
         * <p>
         * @return {@code this}
         * @param name Property name: The name of the trail to be created, which must be unique for an account. This parameter is required.
         */
        public Builder name(final java.lang.String name) {
            this.props.name(name);
            return this;
        }
        /**
         * Property name: The name of the trail to be created, which must be unique for an account.
         * <p>
         * @return {@code this}
         * @param name Property name: The name of the trail to be created, which must be unique for an account. This parameter is required.
         */
        public Builder name(final com.aliyun.ros.cdk.core.IResolvable name) {
            this.props.name(name);
            return this;
        }

        /**
         * Property ossBucketName: The OSS bucket to which the trail delivers logs.
         * <p>
         * Ensure that this is an existing OSS bucket.
         * <p>
         * @return {@code this}
         * @param ossBucketName Property ossBucketName: The OSS bucket to which the trail delivers logs. This parameter is required.
         */
        public Builder ossBucketName(final java.lang.String ossBucketName) {
            this.props.ossBucketName(ossBucketName);
            return this;
        }
        /**
         * Property ossBucketName: The OSS bucket to which the trail delivers logs.
         * <p>
         * Ensure that this is an existing OSS bucket.
         * <p>
         * @return {@code this}
         * @param ossBucketName Property ossBucketName: The OSS bucket to which the trail delivers logs. This parameter is required.
         */
        public Builder ossBucketName(final com.aliyun.ros.cdk.core.IResolvable ossBucketName) {
            this.props.ossBucketName(ossBucketName);
            return this;
        }

        /**
         * Property roleName: The RAM role in ActionTrail permitted by the user.
         * <p>
         * @return {@code this}
         * @param roleName Property roleName: The RAM role in ActionTrail permitted by the user. This parameter is required.
         */
        public Builder roleName(final java.lang.String roleName) {
            this.props.roleName(roleName);
            return this;
        }
        /**
         * Property roleName: The RAM role in ActionTrail permitted by the user.
         * <p>
         * @return {@code this}
         * @param roleName Property roleName: The RAM role in ActionTrail permitted by the user. This parameter is required.
         */
        public Builder roleName(final com.aliyun.ros.cdk.core.IResolvable roleName) {
            this.props.roleName(roleName);
            return this;
        }

        /**
         * Property eventRw: Indicates whether the event is a read or a write event.
         * <p>
         * Valid values: Read, Write, and All. Default value: Write.
         * <p>
         * @return {@code this}
         * @param eventRw Property eventRw: Indicates whether the event is a read or a write event. This parameter is required.
         */
        public Builder eventRw(final java.lang.String eventRw) {
            this.props.eventRw(eventRw);
            return this;
        }
        /**
         * Property eventRw: Indicates whether the event is a read or a write event.
         * <p>
         * Valid values: Read, Write, and All. Default value: Write.
         * <p>
         * @return {@code this}
         * @param eventRw Property eventRw: Indicates whether the event is a read or a write event. This parameter is required.
         */
        public Builder eventRw(final com.aliyun.ros.cdk.core.IResolvable eventRw) {
            this.props.eventRw(eventRw);
            return this;
        }

        /**
         * Property ossKeyPrefix: The prefix of the specified OSS bucket name.
         * <p>
         * This parameter can be left empty.
         * <p>
         * @return {@code this}
         * @param ossKeyPrefix Property ossKeyPrefix: The prefix of the specified OSS bucket name. This parameter is required.
         */
        public Builder ossKeyPrefix(final java.lang.String ossKeyPrefix) {
            this.props.ossKeyPrefix(ossKeyPrefix);
            return this;
        }
        /**
         * Property ossKeyPrefix: The prefix of the specified OSS bucket name.
         * <p>
         * This parameter can be left empty.
         * <p>
         * @return {@code this}
         * @param ossKeyPrefix Property ossKeyPrefix: The prefix of the specified OSS bucket name. This parameter is required.
         */
        public Builder ossKeyPrefix(final com.aliyun.ros.cdk.core.IResolvable ossKeyPrefix) {
            this.props.ossKeyPrefix(ossKeyPrefix);
            return this;
        }

        /**
         * Property slsProjectArn: The unique ARN of the Log Service project.
         * <p>
         * @return {@code this}
         * @param slsProjectArn Property slsProjectArn: The unique ARN of the Log Service project. This parameter is required.
         */
        public Builder slsProjectArn(final java.lang.String slsProjectArn) {
            this.props.slsProjectArn(slsProjectArn);
            return this;
        }
        /**
         * Property slsProjectArn: The unique ARN of the Log Service project.
         * <p>
         * @return {@code this}
         * @param slsProjectArn Property slsProjectArn: The unique ARN of the Log Service project. This parameter is required.
         */
        public Builder slsProjectArn(final com.aliyun.ros.cdk.core.IResolvable slsProjectArn) {
            this.props.slsProjectArn(slsProjectArn);
            return this;
        }

        /**
         * Property slsWriteRoleArn: The unique ARN of the Log Service role.
         * <p>
         * @return {@code this}
         * @param slsWriteRoleArn Property slsWriteRoleArn: The unique ARN of the Log Service role. This parameter is required.
         */
        public Builder slsWriteRoleArn(final java.lang.String slsWriteRoleArn) {
            this.props.slsWriteRoleArn(slsWriteRoleArn);
            return this;
        }
        /**
         * Property slsWriteRoleArn: The unique ARN of the Log Service role.
         * <p>
         * @return {@code this}
         * @param slsWriteRoleArn Property slsWriteRoleArn: The unique ARN of the Log Service role. This parameter is required.
         */
        public Builder slsWriteRoleArn(final com.aliyun.ros.cdk.core.IResolvable slsWriteRoleArn) {
            this.props.slsWriteRoleArn(slsWriteRoleArn);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.actiontrail.Trail}.
         */
        @Override
        public com.aliyun.ros.cdk.actiontrail.Trail build() {
            return new com.aliyun.ros.cdk.actiontrail.Trail(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
