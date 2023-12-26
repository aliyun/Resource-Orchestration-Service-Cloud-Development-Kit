package com.aliyun.ros.cdk.actiontrail;

/**
 * Properties for defining a <code>RosTrail</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-actiontrail-trail
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-12-26T06:30:13.637Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.actiontrail.$Module.class, fqn = "@alicloud/ros-cdk-actiontrail.RosTrailProps")
@software.amazon.jsii.Jsii.Proxy(RosTrailProps.Jsii$Proxy.class)
public interface RosTrailProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getOssBucketName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRoleName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEventRw() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getOssKeyPrefix() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSlsProjectArn() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSlsWriteRoleArn() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosTrailProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosTrailProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosTrailProps> {
        java.lang.Object name;
        java.lang.Object ossBucketName;
        java.lang.Object roleName;
        java.lang.Object eventRw;
        java.lang.Object ossKeyPrefix;
        java.lang.Object slsProjectArn;
        java.lang.Object slsWriteRoleArn;

        /**
         * Sets the value of {@link RosTrailProps#getName}
         * @param name the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link RosTrailProps#getName}
         * @param name the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link RosTrailProps#getOssBucketName}
         * @param ossBucketName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder ossBucketName(java.lang.String ossBucketName) {
            this.ossBucketName = ossBucketName;
            return this;
        }

        /**
         * Sets the value of {@link RosTrailProps#getOssBucketName}
         * @param ossBucketName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder ossBucketName(com.aliyun.ros.cdk.core.IResolvable ossBucketName) {
            this.ossBucketName = ossBucketName;
            return this;
        }

        /**
         * Sets the value of {@link RosTrailProps#getRoleName}
         * @param roleName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder roleName(java.lang.String roleName) {
            this.roleName = roleName;
            return this;
        }

        /**
         * Sets the value of {@link RosTrailProps#getRoleName}
         * @param roleName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder roleName(com.aliyun.ros.cdk.core.IResolvable roleName) {
            this.roleName = roleName;
            return this;
        }

        /**
         * Sets the value of {@link RosTrailProps#getEventRw}
         * @param eventRw the value to be set.
         * @return {@code this}
         */
        public Builder eventRw(java.lang.String eventRw) {
            this.eventRw = eventRw;
            return this;
        }

        /**
         * Sets the value of {@link RosTrailProps#getEventRw}
         * @param eventRw the value to be set.
         * @return {@code this}
         */
        public Builder eventRw(com.aliyun.ros.cdk.core.IResolvable eventRw) {
            this.eventRw = eventRw;
            return this;
        }

        /**
         * Sets the value of {@link RosTrailProps#getOssKeyPrefix}
         * @param ossKeyPrefix the value to be set.
         * @return {@code this}
         */
        public Builder ossKeyPrefix(java.lang.String ossKeyPrefix) {
            this.ossKeyPrefix = ossKeyPrefix;
            return this;
        }

        /**
         * Sets the value of {@link RosTrailProps#getOssKeyPrefix}
         * @param ossKeyPrefix the value to be set.
         * @return {@code this}
         */
        public Builder ossKeyPrefix(com.aliyun.ros.cdk.core.IResolvable ossKeyPrefix) {
            this.ossKeyPrefix = ossKeyPrefix;
            return this;
        }

        /**
         * Sets the value of {@link RosTrailProps#getSlsProjectArn}
         * @param slsProjectArn the value to be set.
         * @return {@code this}
         */
        public Builder slsProjectArn(java.lang.String slsProjectArn) {
            this.slsProjectArn = slsProjectArn;
            return this;
        }

        /**
         * Sets the value of {@link RosTrailProps#getSlsProjectArn}
         * @param slsProjectArn the value to be set.
         * @return {@code this}
         */
        public Builder slsProjectArn(com.aliyun.ros.cdk.core.IResolvable slsProjectArn) {
            this.slsProjectArn = slsProjectArn;
            return this;
        }

        /**
         * Sets the value of {@link RosTrailProps#getSlsWriteRoleArn}
         * @param slsWriteRoleArn the value to be set.
         * @return {@code this}
         */
        public Builder slsWriteRoleArn(java.lang.String slsWriteRoleArn) {
            this.slsWriteRoleArn = slsWriteRoleArn;
            return this;
        }

        /**
         * Sets the value of {@link RosTrailProps#getSlsWriteRoleArn}
         * @param slsWriteRoleArn the value to be set.
         * @return {@code this}
         */
        public Builder slsWriteRoleArn(com.aliyun.ros.cdk.core.IResolvable slsWriteRoleArn) {
            this.slsWriteRoleArn = slsWriteRoleArn;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosTrailProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosTrailProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosTrailProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosTrailProps {
        private final java.lang.Object name;
        private final java.lang.Object ossBucketName;
        private final java.lang.Object roleName;
        private final java.lang.Object eventRw;
        private final java.lang.Object ossKeyPrefix;
        private final java.lang.Object slsProjectArn;
        private final java.lang.Object slsWriteRoleArn;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ossBucketName = software.amazon.jsii.Kernel.get(this, "ossBucketName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.roleName = software.amazon.jsii.Kernel.get(this, "roleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.eventRw = software.amazon.jsii.Kernel.get(this, "eventRw", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ossKeyPrefix = software.amazon.jsii.Kernel.get(this, "ossKeyPrefix", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.slsProjectArn = software.amazon.jsii.Kernel.get(this, "slsProjectArn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.slsWriteRoleArn = software.amazon.jsii.Kernel.get(this, "slsWriteRoleArn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.name = java.util.Objects.requireNonNull(builder.name, "name is required");
            this.ossBucketName = java.util.Objects.requireNonNull(builder.ossBucketName, "ossBucketName is required");
            this.roleName = java.util.Objects.requireNonNull(builder.roleName, "roleName is required");
            this.eventRw = builder.eventRw;
            this.ossKeyPrefix = builder.ossKeyPrefix;
            this.slsProjectArn = builder.slsProjectArn;
            this.slsWriteRoleArn = builder.slsWriteRoleArn;
        }

        @Override
        public final java.lang.Object getName() {
            return this.name;
        }

        @Override
        public final java.lang.Object getOssBucketName() {
            return this.ossBucketName;
        }

        @Override
        public final java.lang.Object getRoleName() {
            return this.roleName;
        }

        @Override
        public final java.lang.Object getEventRw() {
            return this.eventRw;
        }

        @Override
        public final java.lang.Object getOssKeyPrefix() {
            return this.ossKeyPrefix;
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
            data.set("ossBucketName", om.valueToTree(this.getOssBucketName()));
            data.set("roleName", om.valueToTree(this.getRoleName()));
            if (this.getEventRw() != null) {
                data.set("eventRw", om.valueToTree(this.getEventRw()));
            }
            if (this.getOssKeyPrefix() != null) {
                data.set("ossKeyPrefix", om.valueToTree(this.getOssKeyPrefix()));
            }
            if (this.getSlsProjectArn() != null) {
                data.set("slsProjectArn", om.valueToTree(this.getSlsProjectArn()));
            }
            if (this.getSlsWriteRoleArn() != null) {
                data.set("slsWriteRoleArn", om.valueToTree(this.getSlsWriteRoleArn()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-actiontrail.RosTrailProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosTrailProps.Jsii$Proxy that = (RosTrailProps.Jsii$Proxy) o;

            if (!name.equals(that.name)) return false;
            if (!ossBucketName.equals(that.ossBucketName)) return false;
            if (!roleName.equals(that.roleName)) return false;
            if (this.eventRw != null ? !this.eventRw.equals(that.eventRw) : that.eventRw != null) return false;
            if (this.ossKeyPrefix != null ? !this.ossKeyPrefix.equals(that.ossKeyPrefix) : that.ossKeyPrefix != null) return false;
            if (this.slsProjectArn != null ? !this.slsProjectArn.equals(that.slsProjectArn) : that.slsProjectArn != null) return false;
            return this.slsWriteRoleArn != null ? this.slsWriteRoleArn.equals(that.slsWriteRoleArn) : that.slsWriteRoleArn == null;
        }

        @Override
        public final int hashCode() {
            int result = this.name.hashCode();
            result = 31 * result + (this.ossBucketName.hashCode());
            result = 31 * result + (this.roleName.hashCode());
            result = 31 * result + (this.eventRw != null ? this.eventRw.hashCode() : 0);
            result = 31 * result + (this.ossKeyPrefix != null ? this.ossKeyPrefix.hashCode() : 0);
            result = 31 * result + (this.slsProjectArn != null ? this.slsProjectArn.hashCode() : 0);
            result = 31 * result + (this.slsWriteRoleArn != null ? this.slsWriteRoleArn.hashCode() : 0);
            return result;
        }
    }
}
