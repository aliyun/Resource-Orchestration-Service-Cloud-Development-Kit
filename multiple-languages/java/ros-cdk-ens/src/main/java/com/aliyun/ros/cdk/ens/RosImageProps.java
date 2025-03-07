package com.aliyun.ros.cdk.ens;

/**
 * Properties for defining a <code>RosImage</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-image
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:06.511Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ens.$Module.class, fqn = "@alicloud/ros-cdk-ens.RosImageProps")
@software.amazon.jsii.Jsii.Proxy(RosImageProps.Jsii$Proxy.class)
public interface RosImageProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getImageName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDeleteAfterImageUpload() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosImageProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosImageProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosImageProps> {
        java.lang.Object imageName;
        java.lang.Object deleteAfterImageUpload;
        java.lang.Object instanceId;

        /**
         * Sets the value of {@link RosImageProps#getImageName}
         * @param imageName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder imageName(java.lang.String imageName) {
            this.imageName = imageName;
            return this;
        }

        /**
         * Sets the value of {@link RosImageProps#getImageName}
         * @param imageName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder imageName(com.aliyun.ros.cdk.core.IResolvable imageName) {
            this.imageName = imageName;
            return this;
        }

        /**
         * Sets the value of {@link RosImageProps#getDeleteAfterImageUpload}
         * @param deleteAfterImageUpload the value to be set.
         * @return {@code this}
         */
        public Builder deleteAfterImageUpload(java.lang.Boolean deleteAfterImageUpload) {
            this.deleteAfterImageUpload = deleteAfterImageUpload;
            return this;
        }

        /**
         * Sets the value of {@link RosImageProps#getDeleteAfterImageUpload}
         * @param deleteAfterImageUpload the value to be set.
         * @return {@code this}
         */
        public Builder deleteAfterImageUpload(com.aliyun.ros.cdk.core.IResolvable deleteAfterImageUpload) {
            this.deleteAfterImageUpload = deleteAfterImageUpload;
            return this;
        }

        /**
         * Sets the value of {@link RosImageProps#getInstanceId}
         * @param instanceId the value to be set.
         * @return {@code this}
         */
        public Builder instanceId(java.lang.String instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosImageProps#getInstanceId}
         * @param instanceId the value to be set.
         * @return {@code this}
         */
        public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosImageProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosImageProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosImageProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosImageProps {
        private final java.lang.Object imageName;
        private final java.lang.Object deleteAfterImageUpload;
        private final java.lang.Object instanceId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.imageName = software.amazon.jsii.Kernel.get(this, "imageName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.deleteAfterImageUpload = software.amazon.jsii.Kernel.get(this, "deleteAfterImageUpload", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.imageName = java.util.Objects.requireNonNull(builder.imageName, "imageName is required");
            this.deleteAfterImageUpload = builder.deleteAfterImageUpload;
            this.instanceId = builder.instanceId;
        }

        @Override
        public final java.lang.Object getImageName() {
            return this.imageName;
        }

        @Override
        public final java.lang.Object getDeleteAfterImageUpload() {
            return this.deleteAfterImageUpload;
        }

        @Override
        public final java.lang.Object getInstanceId() {
            return this.instanceId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("imageName", om.valueToTree(this.getImageName()));
            if (this.getDeleteAfterImageUpload() != null) {
                data.set("deleteAfterImageUpload", om.valueToTree(this.getDeleteAfterImageUpload()));
            }
            if (this.getInstanceId() != null) {
                data.set("instanceId", om.valueToTree(this.getInstanceId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ens.RosImageProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosImageProps.Jsii$Proxy that = (RosImageProps.Jsii$Proxy) o;

            if (!imageName.equals(that.imageName)) return false;
            if (this.deleteAfterImageUpload != null ? !this.deleteAfterImageUpload.equals(that.deleteAfterImageUpload) : that.deleteAfterImageUpload != null) return false;
            return this.instanceId != null ? this.instanceId.equals(that.instanceId) : that.instanceId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.imageName.hashCode();
            result = 31 * result + (this.deleteAfterImageUpload != null ? this.deleteAfterImageUpload.hashCode() : 0);
            result = 31 * result + (this.instanceId != null ? this.instanceId.hashCode() : 0);
            return result;
        }
    }
}
