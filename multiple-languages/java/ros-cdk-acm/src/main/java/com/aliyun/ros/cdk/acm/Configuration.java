package com.aliyun.ros.cdk.acm;

/**
 * A ROS resource type:  <code>ALIYUN::ACM::Configuration</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-09-15T09:57:23.059Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.acm.$Module.class, fqn = "@alicloud/ros-cdk-acm.Configuration")
public class Configuration extends com.aliyun.ros.cdk.core.Resource {

    protected Configuration(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Configuration(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>ALIYUN::ACM::Configuration</code>.
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
    public Configuration(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.acm.ConfigurationProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>ALIYUN::ACM::Configuration</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public Configuration(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.acm.ConfigurationProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute DataId: The ID of the configuration.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDataId() {
        return software.amazon.jsii.Kernel.get(this, "attrDataId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Group: Group.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrGroup() {
        return software.amazon.jsii.Kernel.get(this, "attrGroup", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute NamespaceId: ID of namespace.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrNamespaceId() {
        return software.amazon.jsii.Kernel.get(this, "attrNamespaceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.acm.Configuration}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.acm.Configuration> {
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
        private final com.aliyun.ros.cdk.acm.ConfigurationProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.acm.ConfigurationProps.Builder();
        }

        /**
         * Property content: The contents of the configuration.
         * <p>
         * @return {@code this}
         * @param content Property content: The contents of the configuration. This parameter is required.
         */
        public Builder content(final java.lang.String content) {
            this.props.content(content);
            return this;
        }
        /**
         * Property content: The contents of the configuration.
         * <p>
         * @return {@code this}
         * @param content Property content: The contents of the configuration. This parameter is required.
         */
        public Builder content(final com.aliyun.ros.cdk.core.IResolvable content) {
            this.props.content(content);
            return this;
        }

        /**
         * Property dataId: The ID of the configuration.
         * <p>
         * Allowed characters are upper and lower case letters, numbers, decimal points (.), Colons (:), asterisks (*), underscores (_), and underscores (-). When the ID prefix is the following value, ACM will automatically use KMS service to encrypt this configuration:
         * The prefix is cipher-: the KMS service is called to encrypt and decrypt the configuration. The size of the encrypted data does not exceed 4 KB, and the maximum does not exceed 6 KB. Special symbols such as and (&amp;) will decrypt errors and are not recommended.
         * The prefix is cipher-kms-aes-128-: using KMS's envelope encryption and decryption method, the configuration content can exceed  6 KB, up to 100 KB. The plain text data of the configuration content will not be transmitted to the KMS system, which is more secure and recommended.
         * <p>
         * @return {@code this}
         * @param dataId Property dataId: The ID of the configuration. This parameter is required.
         */
        public Builder dataId(final java.lang.String dataId) {
            this.props.dataId(dataId);
            return this;
        }
        /**
         * Property dataId: The ID of the configuration.
         * <p>
         * Allowed characters are upper and lower case letters, numbers, decimal points (.), Colons (:), asterisks (*), underscores (_), and underscores (-). When the ID prefix is the following value, ACM will automatically use KMS service to encrypt this configuration:
         * The prefix is cipher-: the KMS service is called to encrypt and decrypt the configuration. The size of the encrypted data does not exceed 4 KB, and the maximum does not exceed 6 KB. Special symbols such as and (&amp;) will decrypt errors and are not recommended.
         * The prefix is cipher-kms-aes-128-: using KMS's envelope encryption and decryption method, the configuration content can exceed  6 KB, up to 100 KB. The plain text data of the configuration content will not be transmitted to the KMS system, which is more secure and recommended.
         * <p>
         * @return {@code this}
         * @param dataId Property dataId: The ID of the configuration. This parameter is required.
         */
        public Builder dataId(final com.aliyun.ros.cdk.core.IResolvable dataId) {
            this.props.dataId(dataId);
            return this;
        }

        /**
         * Property namespaceId: ID of namespace.
         * <p>
         * @return {@code this}
         * @param namespaceId Property namespaceId: ID of namespace. This parameter is required.
         */
        public Builder namespaceId(final java.lang.String namespaceId) {
            this.props.namespaceId(namespaceId);
            return this;
        }
        /**
         * Property namespaceId: ID of namespace.
         * <p>
         * @return {@code this}
         * @param namespaceId Property namespaceId: ID of namespace. This parameter is required.
         */
        public Builder namespaceId(final com.aliyun.ros.cdk.core.IResolvable namespaceId) {
            this.props.namespaceId(namespaceId);
            return this;
        }

        /**
         * Property appName: Configuration application name.
         * <p>
         * @return {@code this}
         * @param appName Property appName: Configuration application name. This parameter is required.
         */
        public Builder appName(final java.lang.String appName) {
            this.props.appName(appName);
            return this;
        }
        /**
         * Property appName: Configuration application name.
         * <p>
         * @return {@code this}
         * @param appName Property appName: Configuration application name. This parameter is required.
         */
        public Builder appName(final com.aliyun.ros.cdk.core.IResolvable appName) {
            this.props.appName(appName);
            return this;
        }

        /**
         * Property desc: Configuration description explains.
         * <p>
         * @return {@code this}
         * @param desc Property desc: Configuration description explains. This parameter is required.
         */
        public Builder desc(final java.lang.String desc) {
            this.props.desc(desc);
            return this;
        }
        /**
         * Property desc: Configuration description explains.
         * <p>
         * @return {@code this}
         * @param desc Property desc: Configuration description explains. This parameter is required.
         */
        public Builder desc(final com.aliyun.ros.cdk.core.IResolvable desc) {
            this.props.desc(desc);
            return this;
        }

        /**
         * Property group: Group.
         * <p>
         * @return {@code this}
         * @param group Property group: Group. This parameter is required.
         */
        public Builder group(final java.lang.String group) {
            this.props.group(group);
            return this;
        }
        /**
         * Property group: Group.
         * <p>
         * @return {@code this}
         * @param group Property group: Group. This parameter is required.
         */
        public Builder group(final com.aliyun.ros.cdk.core.IResolvable group) {
            this.props.group(group);
            return this;
        }

        /**
         * Property tags: Label configurations, such as the presence of a plurality of tags, separated by commas.
         * <p>
         * @return {@code this}
         * @param tags Property tags: Label configurations, such as the presence of a plurality of tags, separated by commas. This parameter is required.
         */
        public Builder tags(final java.lang.String tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * Property type: Provisioning content format, optional values as follows: text, json, xml, yaml, text/html, properties.
         * <p>
         * @return {@code this}
         * @param type Property type: Provisioning content format, optional values as follows: text, json, xml, yaml, text/html, properties. This parameter is required.
         */
        public Builder type(final java.lang.String type) {
            this.props.type(type);
            return this;
        }
        /**
         * Property type: Provisioning content format, optional values as follows: text, json, xml, yaml, text/html, properties.
         * <p>
         * @return {@code this}
         * @param type Property type: Provisioning content format, optional values as follows: text, json, xml, yaml, text/html, properties. This parameter is required.
         */
        public Builder type(final com.aliyun.ros.cdk.core.IResolvable type) {
            this.props.type(type);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.acm.Configuration}.
         */
        @Override
        public com.aliyun.ros.cdk.acm.Configuration build() {
            return new com.aliyun.ros.cdk.acm.Configuration(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
