package com.aliyun.ros.cdk.cloudsso;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::CloudSSO::User</code>, which is used to create a user.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-04T02:47:53.184Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cloudsso.$Module.class, fqn = "@alicloud/ros-cdk-cloudsso.User")
public class User extends com.aliyun.ros.cdk.core.Resource {

    protected User(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected User(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public User(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cloudsso.UserProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public User(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cloudsso.UserProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute UserId: The ID of the user.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrUserId() {
        return software.amazon.jsii.Kernel.get(this, "attrUserId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cloudsso.UserProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cloudsso.UserProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cloudsso.UserProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cloudsso.User}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cloudsso.User> {
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
        private final com.aliyun.ros.cdk.cloudsso.UserProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cloudsso.UserProps.Builder();
        }

        /**
         * Property directoryId: The ID of the directory.
         * <p>
         * @return {@code this}
         * @param directoryId Property directoryId: The ID of the directory. This parameter is required.
         */
        public Builder directoryId(final java.lang.String directoryId) {
            this.props.directoryId(directoryId);
            return this;
        }
        /**
         * Property directoryId: The ID of the directory.
         * <p>
         * @return {@code this}
         * @param directoryId Property directoryId: The ID of the directory. This parameter is required.
         */
        public Builder directoryId(final com.aliyun.ros.cdk.core.IResolvable directoryId) {
            this.props.directoryId(directoryId);
            return this;
        }

        /**
         * Property userName: The name of the user.
         * <p>
         * The name must be unique within the directory. The name cannot be changed.
         * The name can contain numbers, letters, and the following special characters: &#64;_-.
         * The name can be up to 64 characters in length.
         * <p>
         * @return {@code this}
         * @param userName Property userName: The name of the user. This parameter is required.
         */
        public Builder userName(final java.lang.String userName) {
            this.props.userName(userName);
            return this;
        }
        /**
         * Property userName: The name of the user.
         * <p>
         * The name must be unique within the directory. The name cannot be changed.
         * The name can contain numbers, letters, and the following special characters: &#64;_-.
         * The name can be up to 64 characters in length.
         * <p>
         * @return {@code this}
         * @param userName Property userName: The name of the user. This parameter is required.
         */
        public Builder userName(final com.aliyun.ros.cdk.core.IResolvable userName) {
            this.props.userName(userName);
            return this;
        }

        /**
         * Property description: The description of the user.
         * <p>
         * The description can be up to 1,024 characters in length.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the user. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: The description of the user.
         * <p>
         * The description can be up to 1,024 characters in length.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the user. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property displayName: The display name of the user.
         * <p>
         * The name can be up to 256 characters in length.
         * <p>
         * @return {@code this}
         * @param displayName Property displayName: The display name of the user. This parameter is required.
         */
        public Builder displayName(final java.lang.String displayName) {
            this.props.displayName(displayName);
            return this;
        }
        /**
         * Property displayName: The display name of the user.
         * <p>
         * The name can be up to 256 characters in length.
         * <p>
         * @return {@code this}
         * @param displayName Property displayName: The display name of the user. This parameter is required.
         */
        public Builder displayName(final com.aliyun.ros.cdk.core.IResolvable displayName) {
            this.props.displayName(displayName);
            return this;
        }

        /**
         * Property email: The email address of the user.
         * <p>
         * The email address must be unique within the directory.
         * The email address can be up to 128 characters in length.
         * <p>
         * @return {@code this}
         * @param email Property email: The email address of the user. This parameter is required.
         */
        public Builder email(final java.lang.String email) {
            this.props.email(email);
            return this;
        }
        /**
         * Property email: The email address of the user.
         * <p>
         * The email address must be unique within the directory.
         * The email address can be up to 128 characters in length.
         * <p>
         * @return {@code this}
         * @param email Property email: The email address of the user. This parameter is required.
         */
        public Builder email(final com.aliyun.ros.cdk.core.IResolvable email) {
            this.props.email(email);
            return this;
        }

        /**
         * Property firstName: The first name of the user.
         * <p>
         * The name can be up to 64 characters in length.
         * <p>
         * @return {@code this}
         * @param firstName Property firstName: The first name of the user. This parameter is required.
         */
        public Builder firstName(final java.lang.String firstName) {
            this.props.firstName(firstName);
            return this;
        }
        /**
         * Property firstName: The first name of the user.
         * <p>
         * The name can be up to 64 characters in length.
         * <p>
         * @return {@code this}
         * @param firstName Property firstName: The first name of the user. This parameter is required.
         */
        public Builder firstName(final com.aliyun.ros.cdk.core.IResolvable firstName) {
            this.props.firstName(firstName);
            return this;
        }

        /**
         * Property lastName: The last name of the user.
         * <p>
         * The name can be up to 64 characters in length.
         * <p>
         * @return {@code this}
         * @param lastName Property lastName: The last name of the user. This parameter is required.
         */
        public Builder lastName(final java.lang.String lastName) {
            this.props.lastName(lastName);
            return this;
        }
        /**
         * Property lastName: The last name of the user.
         * <p>
         * The name can be up to 64 characters in length.
         * <p>
         * @return {@code this}
         * @param lastName Property lastName: The last name of the user. This parameter is required.
         */
        public Builder lastName(final com.aliyun.ros.cdk.core.IResolvable lastName) {
            this.props.lastName(lastName);
            return this;
        }

        /**
         * Property status: The status of the user.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>Enabled: The logon of the user is enabled. This is the default value.</li>
         * <li>Disabled: The logon of the user is disabled.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param status Property status: The status of the user. This parameter is required.
         */
        public Builder status(final java.lang.String status) {
            this.props.status(status);
            return this;
        }
        /**
         * Property status: The status of the user.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>Enabled: The logon of the user is enabled. This is the default value.</li>
         * <li>Disabled: The logon of the user is disabled.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param status Property status: The status of the user. This parameter is required.
         */
        public Builder status(final com.aliyun.ros.cdk.core.IResolvable status) {
            this.props.status(status);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cloudsso.User}.
         */
        @Override
        public com.aliyun.ros.cdk.cloudsso.User build() {
            return new com.aliyun.ros.cdk.cloudsso.User(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
