package com.aliyun.ros.cdk.actiontrail;

/**
 * Properties for defining a <code>Trail</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-actiontrail-trail
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-08-31T06:51:46.229Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.actiontrail.$Module.class, fqn = "@alicloud/ros-cdk-actiontrail.TrailProps")
@software.amazon.jsii.Jsii.Proxy(TrailProps.Jsii$Proxy.class)
public interface TrailProps extends software.amazon.jsii.JsiiSerializable {

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
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getName();

    /**
     * Property eventRw: Indicates whether the event is a read or a write event.
     * <p>
     * Valid values: Read, Write, and All. Default value: Write.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEventRw() {
        return null;
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
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getOssBucketName() {
        return null;
    }

    /**
     * Property ossKeyPrefix: The prefix for the filenames in the OSS bucket for the trail delivery.
     * <p>
     * Length should be between 6 and 32 characters, must start with a letter, and can
     * include letters, numbers, hyphens (-), forward slashes (/), and underscores (_).
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getOssKeyPrefix() {
        return null;
    }

    /**
     * Property roleName: The name of the associated role for Operation Audit, with a default value of serviceroleforactiontrail.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRoleName() {
        return null;
    }

    /**
     * Property slsProjectArn: The ARN of the Log Service project for the trail delivery.
     * <p>
     * <blockquote>
     * <p>
     * At least one of OssBucketName and SlsProjectArn must be specified.
     * <p>
     * </blockquote>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSlsProjectArn() {
        return null;
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
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSlsWriteRoleArn() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link TrailProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link TrailProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<TrailProps> {
        java.lang.Object name;
        java.lang.Object eventRw;
        java.lang.Object ossBucketName;
        java.lang.Object ossKeyPrefix;
        java.lang.Object roleName;
        java.lang.Object slsProjectArn;
        java.lang.Object slsWriteRoleArn;

        /**
         * Sets the value of {@link TrailProps#getName}
         * @param name Property name: The name of the trail to be created. This parameter is required.
         *             Length should be between 6 and 36 characters, must start with a lowercase letter,
         *             and can include lowercase letters, numbers, hyphens (-), and underscores (_).
         *             <p>
         *             <blockquote>
         *             <p>
         *             The trail name must be unique within the same account.
         *             <p>
         *             </blockquote>
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link TrailProps#getName}
         * @param name Property name: The name of the trail to be created. This parameter is required.
         *             Length should be between 6 and 36 characters, must start with a lowercase letter,
         *             and can include lowercase letters, numbers, hyphens (-), and underscores (_).
         *             <p>
         *             <blockquote>
         *             <p>
         *             The trail name must be unique within the same account.
         *             <p>
         *             </blockquote>
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link TrailProps#getEventRw}
         * @param eventRw Property eventRw: Indicates whether the event is a read or a write event.
         *                Valid values: Read, Write, and All. Default value: Write.
         * @return {@code this}
         */
        public Builder eventRw(java.lang.String eventRw) {
            this.eventRw = eventRw;
            return this;
        }

        /**
         * Sets the value of {@link TrailProps#getEventRw}
         * @param eventRw Property eventRw: Indicates whether the event is a read or a write event.
         *                Valid values: Read, Write, and All. Default value: Write.
         * @return {@code this}
         */
        public Builder eventRw(com.aliyun.ros.cdk.core.IResolvable eventRw) {
            this.eventRw = eventRw;
            return this;
        }

        /**
         * Sets the value of {@link TrailProps#getOssBucketName}
         * @param ossBucketName Property ossBucketName: The OSS bucket for the trail delivery.
         *                      Length should be between 3 and 63 characters, must start with a lowercase letter
         *                      or number, and can include lowercase letters, numbers, and hyphens (-).
         *                      <p>
         *                      <blockquote>
         *                      <p>
         *                      At least one of OssBucketName and SlsProjectArn must be specified.
         *                      <p>
         *                      </blockquote>
         * @return {@code this}
         */
        public Builder ossBucketName(java.lang.String ossBucketName) {
            this.ossBucketName = ossBucketName;
            return this;
        }

        /**
         * Sets the value of {@link TrailProps#getOssBucketName}
         * @param ossBucketName Property ossBucketName: The OSS bucket for the trail delivery.
         *                      Length should be between 3 and 63 characters, must start with a lowercase letter
         *                      or number, and can include lowercase letters, numbers, and hyphens (-).
         *                      <p>
         *                      <blockquote>
         *                      <p>
         *                      At least one of OssBucketName and SlsProjectArn must be specified.
         *                      <p>
         *                      </blockquote>
         * @return {@code this}
         */
        public Builder ossBucketName(com.aliyun.ros.cdk.core.IResolvable ossBucketName) {
            this.ossBucketName = ossBucketName;
            return this;
        }

        /**
         * Sets the value of {@link TrailProps#getOssKeyPrefix}
         * @param ossKeyPrefix Property ossKeyPrefix: The prefix for the filenames in the OSS bucket for the trail delivery.
         *                     Length should be between 6 and 32 characters, must start with a letter, and can
         *                     include letters, numbers, hyphens (-), forward slashes (/), and underscores (_).
         * @return {@code this}
         */
        public Builder ossKeyPrefix(java.lang.String ossKeyPrefix) {
            this.ossKeyPrefix = ossKeyPrefix;
            return this;
        }

        /**
         * Sets the value of {@link TrailProps#getOssKeyPrefix}
         * @param ossKeyPrefix Property ossKeyPrefix: The prefix for the filenames in the OSS bucket for the trail delivery.
         *                     Length should be between 6 and 32 characters, must start with a letter, and can
         *                     include letters, numbers, hyphens (-), forward slashes (/), and underscores (_).
         * @return {@code this}
         */
        public Builder ossKeyPrefix(com.aliyun.ros.cdk.core.IResolvable ossKeyPrefix) {
            this.ossKeyPrefix = ossKeyPrefix;
            return this;
        }

        /**
         * Sets the value of {@link TrailProps#getRoleName}
         * @param roleName Property roleName: The name of the associated role for Operation Audit, with a default value of serviceroleforactiontrail.
         * @return {@code this}
         */
        public Builder roleName(java.lang.String roleName) {
            this.roleName = roleName;
            return this;
        }

        /**
         * Sets the value of {@link TrailProps#getRoleName}
         * @param roleName Property roleName: The name of the associated role for Operation Audit, with a default value of serviceroleforactiontrail.
         * @return {@code this}
         */
        public Builder roleName(com.aliyun.ros.cdk.core.IResolvable roleName) {
            this.roleName = roleName;
            return this;
        }

        /**
         * Sets the value of {@link TrailProps#getSlsProjectArn}
         * @param slsProjectArn Property slsProjectArn: The ARN of the Log Service project for the trail delivery.
         *                      <blockquote>
         *                      <p>
         *                      At least one of OssBucketName and SlsProjectArn must be specified.
         *                      <p>
         *                      </blockquote>
         * @return {@code this}
         */
        public Builder slsProjectArn(java.lang.String slsProjectArn) {
            this.slsProjectArn = slsProjectArn;
            return this;
        }

        /**
         * Sets the value of {@link TrailProps#getSlsProjectArn}
         * @param slsProjectArn Property slsProjectArn: The ARN of the Log Service project for the trail delivery.
         *                      <blockquote>
         *                      <p>
         *                      At least one of OssBucketName and SlsProjectArn must be specified.
         *                      <p>
         *                      </blockquote>
         * @return {@code this}
         */
        public Builder slsProjectArn(com.aliyun.ros.cdk.core.IResolvable slsProjectArn) {
            this.slsProjectArn = slsProjectArn;
            return this;
        }

        /**
         * Sets the value of {@link TrailProps#getSlsWriteRoleArn}
         * @param slsWriteRoleArn Property slsWriteRoleArn: The ARN of the role assumed by Operation Audit when delivering operation events to the Log Service project.
         *                        <ul>
         *                        <li>If this parameter is not specified, Operation Audit will create the necessary
         *                        resources by creating a service-linked role.</li>
         *                        <li>If this parameter is specified, when you need to deliver events to the current
         *                        account, you need to grant the RAM role the permissions of the Operation Audit
         *                        service-linked role. When you need to deliver events to another account, you need
         *                        to bind the system permission policy for event delivery to the RAM role. For more
         *                        information on cross-account delivery, see Deliver Events from Multiple
         *                        Accounts to One Account.</li>
         *                        </ul>
         * @return {@code this}
         */
        public Builder slsWriteRoleArn(java.lang.String slsWriteRoleArn) {
            this.slsWriteRoleArn = slsWriteRoleArn;
            return this;
        }

        /**
         * Sets the value of {@link TrailProps#getSlsWriteRoleArn}
         * @param slsWriteRoleArn Property slsWriteRoleArn: The ARN of the role assumed by Operation Audit when delivering operation events to the Log Service project.
         *                        <ul>
         *                        <li>If this parameter is not specified, Operation Audit will create the necessary
         *                        resources by creating a service-linked role.</li>
         *                        <li>If this parameter is specified, when you need to deliver events to the current
         *                        account, you need to grant the RAM role the permissions of the Operation Audit
         *                        service-linked role. When you need to deliver events to another account, you need
         *                        to bind the system permission policy for event delivery to the RAM role. For more
         *                        information on cross-account delivery, see Deliver Events from Multiple
         *                        Accounts to One Account.</li>
         *                        </ul>
         * @return {@code this}
         */
        public Builder slsWriteRoleArn(com.aliyun.ros.cdk.core.IResolvable slsWriteRoleArn) {
            this.slsWriteRoleArn = slsWriteRoleArn;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link TrailProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public TrailProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link TrailProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements TrailProps {
        private final java.lang.Object name;
        private final java.lang.Object eventRw;
        private final java.lang.Object ossBucketName;
        private final java.lang.Object ossKeyPrefix;
        private final java.lang.Object roleName;
        private final java.lang.Object slsProjectArn;
        private final java.lang.Object slsWriteRoleArn;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.eventRw = software.amazon.jsii.Kernel.get(this, "eventRw", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ossBucketName = software.amazon.jsii.Kernel.get(this, "ossBucketName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ossKeyPrefix = software.amazon.jsii.Kernel.get(this, "ossKeyPrefix", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.roleName = software.amazon.jsii.Kernel.get(this, "roleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.slsProjectArn = software.amazon.jsii.Kernel.get(this, "slsProjectArn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.slsWriteRoleArn = software.amazon.jsii.Kernel.get(this, "slsWriteRoleArn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.name = java.util.Objects.requireNonNull(builder.name, "name is required");
            this.eventRw = builder.eventRw;
            this.ossBucketName = builder.ossBucketName;
            this.ossKeyPrefix = builder.ossKeyPrefix;
            this.roleName = builder.roleName;
            this.slsProjectArn = builder.slsProjectArn;
            this.slsWriteRoleArn = builder.slsWriteRoleArn;
        }

        @Override
        public final java.lang.Object getName() {
            return this.name;
        }

        @Override
        public final java.lang.Object getEventRw() {
            return this.eventRw;
        }

        @Override
        public final java.lang.Object getOssBucketName() {
            return this.ossBucketName;
        }

        @Override
        public final java.lang.Object getOssKeyPrefix() {
            return this.ossKeyPrefix;
        }

        @Override
        public final java.lang.Object getRoleName() {
            return this.roleName;
        }

        @Override
        public final java.lang.Object getSlsProjectArn() {
            return this.slsProjectArn;
        }

        @Override
        public final java.lang.Object getSlsWriteRoleArn() {
            return this.slsWriteRoleArn;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("name", om.valueToTree(this.getName()));
            if (this.getEventRw() != null) {
                data.set("eventRw", om.valueToTree(this.getEventRw()));
            }
            if (this.getOssBucketName() != null) {
                data.set("ossBucketName", om.valueToTree(this.getOssBucketName()));
            }
            if (this.getOssKeyPrefix() != null) {
                data.set("ossKeyPrefix", om.valueToTree(this.getOssKeyPrefix()));
            }
            if (this.getRoleName() != null) {
                data.set("roleName", om.valueToTree(this.getRoleName()));
            }
            if (this.getSlsProjectArn() != null) {
                data.set("slsProjectArn", om.valueToTree(this.getSlsProjectArn()));
            }
            if (this.getSlsWriteRoleArn() != null) {
                data.set("slsWriteRoleArn", om.valueToTree(this.getSlsWriteRoleArn()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-actiontrail.TrailProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            TrailProps.Jsii$Proxy that = (TrailProps.Jsii$Proxy) o;

            if (!name.equals(that.name)) return false;
            if (this.eventRw != null ? !this.eventRw.equals(that.eventRw) : that.eventRw != null) return false;
            if (this.ossBucketName != null ? !this.ossBucketName.equals(that.ossBucketName) : that.ossBucketName != null) return false;
            if (this.ossKeyPrefix != null ? !this.ossKeyPrefix.equals(that.ossKeyPrefix) : that.ossKeyPrefix != null) return false;
            if (this.roleName != null ? !this.roleName.equals(that.roleName) : that.roleName != null) return false;
            if (this.slsProjectArn != null ? !this.slsProjectArn.equals(that.slsProjectArn) : that.slsProjectArn != null) return false;
            return this.slsWriteRoleArn != null ? this.slsWriteRoleArn.equals(that.slsWriteRoleArn) : that.slsWriteRoleArn == null;
        }

        @Override
        public final int hashCode() {
            int result = this.name.hashCode();
            result = 31 * result + (this.eventRw != null ? this.eventRw.hashCode() : 0);
            result = 31 * result + (this.ossBucketName != null ? this.ossBucketName.hashCode() : 0);
            result = 31 * result + (this.ossKeyPrefix != null ? this.ossKeyPrefix.hashCode() : 0);
            result = 31 * result + (this.roleName != null ? this.roleName.hashCode() : 0);
            result = 31 * result + (this.slsProjectArn != null ? this.slsProjectArn.hashCode() : 0);
            result = 31 * result + (this.slsWriteRoleArn != null ? this.slsWriteRoleArn.hashCode() : 0);
            return result;
        }
    }
}
