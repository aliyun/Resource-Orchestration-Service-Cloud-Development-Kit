package com.aliyun.ros.cdk.actiontrail;

/**
 * Properties for defining a `ALIYUN::ACTIONTRAIL::Trail`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:33.111Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.actiontrail.$Module.class, fqn = "@alicloud/ros-cdk-actiontrail.RosTrailProps")
@software.amazon.jsii.Jsii.Proxy(RosTrailProps.Jsii$Proxy.class)
public interface RosTrailProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getOssBucketName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getRoleName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getEventRw() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getOssKeyPrefix() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getSlsProjectArn() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getSlsWriteRoleArn() {
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
        private java.lang.String name;
        private java.lang.String ossBucketName;
        private java.lang.String roleName;
        private java.lang.String eventRw;
        private java.lang.String ossKeyPrefix;
        private java.lang.String slsProjectArn;
        private java.lang.String slsWriteRoleArn;

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
         * Sets the value of {@link RosTrailProps#getOssBucketName}
         * @param ossBucketName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder ossBucketName(java.lang.String ossBucketName) {
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
         * Sets the value of {@link RosTrailProps#getEventRw}
         * @param eventRw the value to be set.
         * @return {@code this}
         */
        public Builder eventRw(java.lang.String eventRw) {
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
         * Sets the value of {@link RosTrailProps#getSlsProjectArn}
         * @param slsProjectArn the value to be set.
         * @return {@code this}
         */
        public Builder slsProjectArn(java.lang.String slsProjectArn) {
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
         * Builds the configured instance.
         * @return a new instance of {@link RosTrailProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosTrailProps build() {
            return new Jsii$Proxy(name, ossBucketName, roleName, eventRw, ossKeyPrefix, slsProjectArn, slsWriteRoleArn);
        }
    }

    /**
     * An implementation for {@link RosTrailProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosTrailProps {
        private final java.lang.String name;
        private final java.lang.String ossBucketName;
        private final java.lang.String roleName;
        private final java.lang.String eventRw;
        private final java.lang.String ossKeyPrefix;
        private final java.lang.String slsProjectArn;
        private final java.lang.String slsWriteRoleArn;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.ossBucketName = software.amazon.jsii.Kernel.get(this, "ossBucketName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.roleName = software.amazon.jsii.Kernel.get(this, "roleName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.eventRw = software.amazon.jsii.Kernel.get(this, "eventRw", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.ossKeyPrefix = software.amazon.jsii.Kernel.get(this, "ossKeyPrefix", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.slsProjectArn = software.amazon.jsii.Kernel.get(this, "slsProjectArn", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.slsWriteRoleArn = software.amazon.jsii.Kernel.get(this, "slsWriteRoleArn", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.String name, final java.lang.String ossBucketName, final java.lang.String roleName, final java.lang.String eventRw, final java.lang.String ossKeyPrefix, final java.lang.String slsProjectArn, final java.lang.String slsWriteRoleArn) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.name = java.util.Objects.requireNonNull(name, "name is required");
            this.ossBucketName = java.util.Objects.requireNonNull(ossBucketName, "ossBucketName is required");
            this.roleName = java.util.Objects.requireNonNull(roleName, "roleName is required");
            this.eventRw = eventRw;
            this.ossKeyPrefix = ossKeyPrefix;
            this.slsProjectArn = slsProjectArn;
            this.slsWriteRoleArn = slsWriteRoleArn;
        }

        @Override
        public final java.lang.String getName() {
            return this.name;
        }

        @Override
        public final java.lang.String getOssBucketName() {
            return this.ossBucketName;
        }

        @Override
        public final java.lang.String getRoleName() {
            return this.roleName;
        }

        @Override
        public final java.lang.String getEventRw() {
            return this.eventRw;
        }

        @Override
        public final java.lang.String getOssKeyPrefix() {
            return this.ossKeyPrefix;
        }

        @Override
        public final java.lang.String getSlsProjectArn() {
            return this.slsProjectArn;
        }

        @Override
        public final java.lang.String getSlsWriteRoleArn() {
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
