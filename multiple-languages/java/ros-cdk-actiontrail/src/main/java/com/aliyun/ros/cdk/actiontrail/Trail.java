package com.aliyun.ros.cdk.actiontrail;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ACTIONTRAIL::Trail</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-08-31T06:51:46.213Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.actiontrail.$Module.class, fqn = "@alicloud/ros-cdk-actiontrail.Trail")
public class Trail extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.actiontrail.ITrail {

    protected Trail(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Trail(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
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
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
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
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrName() {
        return software.amazon.jsii.Kernel.get(this, "attrName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.actiontrail.TrailProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.actiontrail.TrailProps.class));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    protected void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.String getId() {
        return software.amazon.jsii.Kernel.get(this, "id", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    protected void setId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "id", java.util.Objects.requireNonNull(value, "id is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
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
         * Property name: The name of the trail to be created.
         * <p>
         * Length should be between 6 and 36 characters, must start with a lowercase letter,
         * and can include lowercase letters, numbers, hyphens (-), and underscores (_).
         * <p>
         * <blockquote>
         * <p>
         * The trail name must be unique within the same account.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param name Property name: The name of the trail to be created. This parameter is required.
         */
        public Builder name(final java.lang.String name) {
            this.props.name(name);
            return this;
        }
        /**
         * Property name: The name of the trail to be created.
         * <p>
         * Length should be between 6 and 36 characters, must start with a lowercase letter,
         * and can include lowercase letters, numbers, hyphens (-), and underscores (_).
         * <p>
         * <blockquote>
         * <p>
         * The trail name must be unique within the same account.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param name Property name: The name of the trail to be created. This parameter is required.
         */
        public Builder name(final com.aliyun.ros.cdk.core.IResolvable name) {
            this.props.name(name);
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
         * Property ossBucketName: The OSS bucket for the trail delivery.
         * <p>
         * Length should be between 3 and 63 characters, must start with a lowercase letter
         * or number, and can include lowercase letters, numbers, and hyphens (-).
         * <p>
         * <blockquote>
         * <p>
         * At least one of OssBucketName and SlsProjectArn must be specified.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param ossBucketName Property ossBucketName: The OSS bucket for the trail delivery. This parameter is required.
         */
        public Builder ossBucketName(final java.lang.String ossBucketName) {
            this.props.ossBucketName(ossBucketName);
            return this;
        }
        /**
         * Property ossBucketName: The OSS bucket for the trail delivery.
         * <p>
         * Length should be between 3 and 63 characters, must start with a lowercase letter
         * or number, and can include lowercase letters, numbers, and hyphens (-).
         * <p>
         * <blockquote>
         * <p>
         * At least one of OssBucketName and SlsProjectArn must be specified.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param ossBucketName Property ossBucketName: The OSS bucket for the trail delivery. This parameter is required.
         */
        public Builder ossBucketName(final com.aliyun.ros.cdk.core.IResolvable ossBucketName) {
            this.props.ossBucketName(ossBucketName);
            return this;
        }

        /**
         * Property ossKeyPrefix: The prefix for the filenames in the OSS bucket for the trail delivery.
         * <p>
         * Length should be between 6 and 32 characters, must start with a letter, and can
         * include letters, numbers, hyphens (-), forward slashes (/), and underscores (_).
         * <p>
         * @return {@code this}
         * @param ossKeyPrefix Property ossKeyPrefix: The prefix for the filenames in the OSS bucket for the trail delivery. This parameter is required.
         */
        public Builder ossKeyPrefix(final java.lang.String ossKeyPrefix) {
            this.props.ossKeyPrefix(ossKeyPrefix);
            return this;
        }
        /**
         * Property ossKeyPrefix: The prefix for the filenames in the OSS bucket for the trail delivery.
         * <p>
         * Length should be between 6 and 32 characters, must start with a letter, and can
         * include letters, numbers, hyphens (-), forward slashes (/), and underscores (_).
         * <p>
         * @return {@code this}
         * @param ossKeyPrefix Property ossKeyPrefix: The prefix for the filenames in the OSS bucket for the trail delivery. This parameter is required.
         */
        public Builder ossKeyPrefix(final com.aliyun.ros.cdk.core.IResolvable ossKeyPrefix) {
            this.props.ossKeyPrefix(ossKeyPrefix);
            return this;
        }

        /**
         * Property roleName: The name of the associated role for Operation Audit, with a default value of serviceroleforactiontrail.
         * <p>
         * @return {@code this}
         * @param roleName Property roleName: The name of the associated role for Operation Audit, with a default value of serviceroleforactiontrail. This parameter is required.
         */
        public Builder roleName(final java.lang.String roleName) {
            this.props.roleName(roleName);
            return this;
        }
        /**
         * Property roleName: The name of the associated role for Operation Audit, with a default value of serviceroleforactiontrail.
         * <p>
         * @return {@code this}
         * @param roleName Property roleName: The name of the associated role for Operation Audit, with a default value of serviceroleforactiontrail. This parameter is required.
         */
        public Builder roleName(final com.aliyun.ros.cdk.core.IResolvable roleName) {
            this.props.roleName(roleName);
            return this;
        }

        /**
         * Property slsProjectArn: The ARN of the Log Service project for the trail delivery.
         * <p>
         * <blockquote>
         * <p>
         * At least one of OssBucketName and SlsProjectArn must be specified.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param slsProjectArn Property slsProjectArn: The ARN of the Log Service project for the trail delivery. This parameter is required.
         */
        public Builder slsProjectArn(final java.lang.String slsProjectArn) {
            this.props.slsProjectArn(slsProjectArn);
            return this;
        }
        /**
         * Property slsProjectArn: The ARN of the Log Service project for the trail delivery.
         * <p>
         * <blockquote>
         * <p>
         * At least one of OssBucketName and SlsProjectArn must be specified.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param slsProjectArn Property slsProjectArn: The ARN of the Log Service project for the trail delivery. This parameter is required.
         */
        public Builder slsProjectArn(final com.aliyun.ros.cdk.core.IResolvable slsProjectArn) {
            this.props.slsProjectArn(slsProjectArn);
            return this;
        }

        /**
         * Property slsWriteRoleArn: The ARN of the role assumed by Operation Audit when delivering operation events to the Log Service project.
         * <p>
         * <ul>
         * <li>If this parameter is not specified, Operation Audit will create the necessary
         * resources by creating a service-linked role.</li>
         * <li>If this parameter is specified, when you need to deliver events to the current
         * account, you need to grant the RAM role the permissions of the Operation Audit
         * service-linked role. When you need to deliver events to another account, you need
         * to bind the system permission policy for event delivery to the RAM role. For more
         * information on cross-account delivery, see Deliver Events from Multiple
         * Accounts to One Account.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param slsWriteRoleArn Property slsWriteRoleArn: The ARN of the role assumed by Operation Audit when delivering operation events to the Log Service project. This parameter is required.
         */
        public Builder slsWriteRoleArn(final java.lang.String slsWriteRoleArn) {
            this.props.slsWriteRoleArn(slsWriteRoleArn);
            return this;
        }
        /**
         * Property slsWriteRoleArn: The ARN of the role assumed by Operation Audit when delivering operation events to the Log Service project.
         * <p>
         * <ul>
         * <li>If this parameter is not specified, Operation Audit will create the necessary
         * resources by creating a service-linked role.</li>
         * <li>If this parameter is specified, when you need to deliver events to the current
         * account, you need to grant the RAM role the permissions of the Operation Audit
         * service-linked role. When you need to deliver events to another account, you need
         * to bind the system permission policy for event delivery to the RAM role. For more
         * information on cross-account delivery, see Deliver Events from Multiple
         * Accounts to One Account.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param slsWriteRoleArn Property slsWriteRoleArn: The ARN of the role assumed by Operation Audit when delivering operation events to the Log Service project. This parameter is required.
         */
        public Builder slsWriteRoleArn(final com.aliyun.ros.cdk.core.IResolvable slsWriteRoleArn) {
            this.props.slsWriteRoleArn(slsWriteRoleArn);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.actiontrail.Trail}.
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
