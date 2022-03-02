package com.aliyun.ros.cdk.cms;

/**
 * A ROS resource type:  `ALIYUN::CMS::Contact`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.53.0 (build c071d26)", date = "2022-02-11T01:44:07.098Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cms.$Module.class, fqn = "@alicloud/ros-cdk-cms.Contact")
public class Contact extends com.aliyun.ros.cdk.core.Resource {

    protected Contact(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Contact(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::CMS::Contact`.
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
    public Contact(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cms.ContactProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::CMS::Contact`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public Contact(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cms.ContactProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ContactName: The name of the alarm contact.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrContactName() {
        return software.amazon.jsii.Kernel.get(this, "attrContactName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cms.Contact}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cms.Contact> {
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
        private final com.aliyun.ros.cdk.cms.ContactProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cms.ContactProps.Builder();
        }

        /**
         * Property channels: undefined.
         * <p>
         * @return {@code this}
         * @param channels Property channels: undefined. This parameter is required.
         */
        public Builder channels(final com.aliyun.ros.cdk.cms.RosContact.ChannelsProperty channels) {
            this.props.channels(channels);
            return this;
        }
        /**
         * Property channels: undefined.
         * <p>
         * @return {@code this}
         * @param channels Property channels: undefined. This parameter is required.
         */
        public Builder channels(final com.aliyun.ros.cdk.core.IResolvable channels) {
            this.props.channels(channels);
            return this;
        }

        /**
         * Property contactName: The name of the alarm contact.
         * <p>
         * @return {@code this}
         * @param contactName Property contactName: The name of the alarm contact. This parameter is required.
         */
        public Builder contactName(final java.lang.String contactName) {
            this.props.contactName(contactName);
            return this;
        }
        /**
         * Property contactName: The name of the alarm contact.
         * <p>
         * @return {@code this}
         * @param contactName Property contactName: The name of the alarm contact. This parameter is required.
         */
        public Builder contactName(final com.aliyun.ros.cdk.core.IResolvable contactName) {
            this.props.contactName(contactName);
            return this;
        }

        /**
         * Property describe: The description of the alert contact.
         * <p>
         * @return {@code this}
         * @param describe Property describe: The description of the alert contact. This parameter is required.
         */
        public Builder describe(final java.lang.String describe) {
            this.props.describe(describe);
            return this;
        }
        /**
         * Property describe: The description of the alert contact.
         * <p>
         * @return {@code this}
         * @param describe Property describe: The description of the alert contact. This parameter is required.
         */
        public Builder describe(final com.aliyun.ros.cdk.core.IResolvable describe) {
            this.props.describe(describe);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.cms.Contact}.
         */
        @Override
        public com.aliyun.ros.cdk.cms.Contact build() {
            return new com.aliyun.ros.cdk.cms.Contact(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
