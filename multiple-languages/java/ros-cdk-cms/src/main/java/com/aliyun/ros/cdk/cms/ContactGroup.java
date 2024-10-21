package com.aliyun.ros.cdk.cms;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::CMS::ContactGroup</code>, which is used to create an alert contact group.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-10-18T08:56:27.665Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cms.$Module.class, fqn = "@alicloud/ros-cdk-cms.ContactGroup")
public class ContactGroup extends com.aliyun.ros.cdk.core.Resource {

    protected ContactGroup(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected ContactGroup(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public ContactGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cms.ContactGroupProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public ContactGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cms.ContactGroupProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ContactGroupName: The name of the alert contact group.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrContactGroupName() {
        return software.amazon.jsii.Kernel.get(this, "attrContactGroupName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cms.ContactGroupProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cms.ContactGroupProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cms.ContactGroupProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cms.ContactGroup}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cms.ContactGroup> {
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
        private final com.aliyun.ros.cdk.cms.ContactGroupProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cms.ContactGroupProps.Builder();
        }

        /**
         * Property contactGroupName: The name of the alert contact group.
         * <p>
         * @return {@code this}
         * @param contactGroupName Property contactGroupName: The name of the alert contact group. This parameter is required.
         */
        public Builder contactGroupName(final java.lang.String contactGroupName) {
            this.props.contactGroupName(contactGroupName);
            return this;
        }
        /**
         * Property contactGroupName: The name of the alert contact group.
         * <p>
         * @return {@code this}
         * @param contactGroupName Property contactGroupName: The name of the alert contact group. This parameter is required.
         */
        public Builder contactGroupName(final com.aliyun.ros.cdk.core.IResolvable contactGroupName) {
            this.props.contactGroupName(contactGroupName);
            return this;
        }

        /**
         * Property contactNames: The name of the alert contact.
         * <p>
         * @return {@code this}
         * @param contactNames Property contactNames: The name of the alert contact. This parameter is required.
         */
        public Builder contactNames(final com.aliyun.ros.cdk.core.IResolvable contactNames) {
            this.props.contactNames(contactNames);
            return this;
        }
        /**
         * Property contactNames: The name of the alert contact.
         * <p>
         * @return {@code this}
         * @param contactNames Property contactNames: The name of the alert contact. This parameter is required.
         */
        public Builder contactNames(final java.util.List<? extends java.lang.Object> contactNames) {
            this.props.contactNames(contactNames);
            return this;
        }

        /**
         * Property describe: The description of the alert contact group.
         * <p>
         * @return {@code this}
         * @param describe Property describe: The description of the alert contact group. This parameter is required.
         */
        public Builder describe(final java.lang.String describe) {
            this.props.describe(describe);
            return this;
        }
        /**
         * Property describe: The description of the alert contact group.
         * <p>
         * @return {@code this}
         * @param describe Property describe: The description of the alert contact group. This parameter is required.
         */
        public Builder describe(final com.aliyun.ros.cdk.core.IResolvable describe) {
            this.props.describe(describe);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cms.ContactGroup}.
         */
        @Override
        public com.aliyun.ros.cdk.cms.ContactGroup build() {
            return new com.aliyun.ros.cdk.cms.ContactGroup(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
