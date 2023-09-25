package com.aliyun.ros.cdk.oss;

/**
 * Properties for defining a <code>ALIYUN::OSS::Directory</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-09-25T10:01:46.854Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oss.$Module.class, fqn = "@alicloud/ros-cdk-oss.RosDirectoryProps")
@software.amazon.jsii.Jsii.Proxy(RosDirectoryProps.Jsii$Proxy.class)
public interface RosDirectoryProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getBucketName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDirectoryName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDeletionForce() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosDirectoryProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosDirectoryProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosDirectoryProps> {
        java.lang.Object bucketName;
        java.lang.Object directoryName;
        java.lang.Object deletionForce;

        /**
         * Sets the value of {@link RosDirectoryProps#getBucketName}
         * @param bucketName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder bucketName(java.lang.String bucketName) {
            this.bucketName = bucketName;
            return this;
        }

        /**
         * Sets the value of {@link RosDirectoryProps#getBucketName}
         * @param bucketName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder bucketName(com.aliyun.ros.cdk.core.IResolvable bucketName) {
            this.bucketName = bucketName;
            return this;
        }

        /**
         * Sets the value of {@link RosDirectoryProps#getDirectoryName}
         * @param directoryName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder directoryName(java.lang.String directoryName) {
            this.directoryName = directoryName;
            return this;
        }

        /**
         * Sets the value of {@link RosDirectoryProps#getDirectoryName}
         * @param directoryName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder directoryName(com.aliyun.ros.cdk.core.IResolvable directoryName) {
            this.directoryName = directoryName;
            return this;
        }

        /**
         * Sets the value of {@link RosDirectoryProps#getDeletionForce}
         * @param deletionForce the value to be set.
         * @return {@code this}
         */
        public Builder deletionForce(java.lang.Boolean deletionForce) {
            this.deletionForce = deletionForce;
            return this;
        }

        /**
         * Sets the value of {@link RosDirectoryProps#getDeletionForce}
         * @param deletionForce the value to be set.
         * @return {@code this}
         */
        public Builder deletionForce(com.aliyun.ros.cdk.core.IResolvable deletionForce) {
            this.deletionForce = deletionForce;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosDirectoryProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosDirectoryProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosDirectoryProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosDirectoryProps {
        private final java.lang.Object bucketName;
        private final java.lang.Object directoryName;
        private final java.lang.Object deletionForce;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.bucketName = software.amazon.jsii.Kernel.get(this, "bucketName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.directoryName = software.amazon.jsii.Kernel.get(this, "directoryName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.deletionForce = software.amazon.jsii.Kernel.get(this, "deletionForce", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.bucketName = java.util.Objects.requireNonNull(builder.bucketName, "bucketName is required");
            this.directoryName = java.util.Objects.requireNonNull(builder.directoryName, "directoryName is required");
            this.deletionForce = builder.deletionForce;
        }

        @Override
        public final java.lang.Object getBucketName() {
            return this.bucketName;
        }

        @Override
        public final java.lang.Object getDirectoryName() {
            return this.directoryName;
        }

        @Override
        public final java.lang.Object getDeletionForce() {
            return this.deletionForce;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("bucketName", om.valueToTree(this.getBucketName()));
            data.set("directoryName", om.valueToTree(this.getDirectoryName()));
            if (this.getDeletionForce() != null) {
                data.set("deletionForce", om.valueToTree(this.getDeletionForce()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-oss.RosDirectoryProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosDirectoryProps.Jsii$Proxy that = (RosDirectoryProps.Jsii$Proxy) o;

            if (!bucketName.equals(that.bucketName)) return false;
            if (!directoryName.equals(that.directoryName)) return false;
            return this.deletionForce != null ? this.deletionForce.equals(that.deletionForce) : that.deletionForce == null;
        }

        @Override
        public final int hashCode() {
            int result = this.bucketName.hashCode();
            result = 31 * result + (this.directoryName.hashCode());
            result = 31 * result + (this.deletionForce != null ? this.deletionForce.hashCode() : 0);
            return result;
        }
    }
}
