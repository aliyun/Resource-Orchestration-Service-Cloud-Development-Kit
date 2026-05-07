package com.aliyun.ros.cdk.cloudstoragegateway;

/**
 * Properties for defining a <code>ExpressSync</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudstoragegateway-expresssync
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:46.934Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cloudstoragegateway.$Module.class, fqn = "@alicloud/ros-cdk-cloudstoragegateway.ExpressSyncProps")
@software.amazon.jsii.Jsii.Proxy(ExpressSyncProps.Jsii$Proxy.class)
public interface ExpressSyncProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property bucketName: The name of the OSS bucket.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getBucketName();

    /**
     * Property bucketRegion: The region of the OSS bucket.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getBucketRegion();

    /**
     * Property name: The name of the ExpressSync.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getName();

    /**
     * Property bucketPrefix: The prefix of the OSS bucket.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBucketPrefix() {
        return null;
    }

    /**
     * Property description: The description of the ExpressSync.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link ExpressSyncProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ExpressSyncProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ExpressSyncProps> {
        java.lang.Object bucketName;
        java.lang.Object bucketRegion;
        java.lang.Object name;
        java.lang.Object bucketPrefix;
        java.lang.Object description;

        /**
         * Sets the value of {@link ExpressSyncProps#getBucketName}
         * @param bucketName Property bucketName: The name of the OSS bucket. This parameter is required.
         * @return {@code this}
         */
        public Builder bucketName(java.lang.String bucketName) {
            this.bucketName = bucketName;
            return this;
        }

        /**
         * Sets the value of {@link ExpressSyncProps#getBucketName}
         * @param bucketName Property bucketName: The name of the OSS bucket. This parameter is required.
         * @return {@code this}
         */
        public Builder bucketName(com.aliyun.ros.cdk.core.IResolvable bucketName) {
            this.bucketName = bucketName;
            return this;
        }

        /**
         * Sets the value of {@link ExpressSyncProps#getBucketRegion}
         * @param bucketRegion Property bucketRegion: The region of the OSS bucket. This parameter is required.
         * @return {@code this}
         */
        public Builder bucketRegion(java.lang.String bucketRegion) {
            this.bucketRegion = bucketRegion;
            return this;
        }

        /**
         * Sets the value of {@link ExpressSyncProps#getBucketRegion}
         * @param bucketRegion Property bucketRegion: The region of the OSS bucket. This parameter is required.
         * @return {@code this}
         */
        public Builder bucketRegion(com.aliyun.ros.cdk.core.IResolvable bucketRegion) {
            this.bucketRegion = bucketRegion;
            return this;
        }

        /**
         * Sets the value of {@link ExpressSyncProps#getName}
         * @param name Property name: The name of the ExpressSync. This parameter is required.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link ExpressSyncProps#getName}
         * @param name Property name: The name of the ExpressSync. This parameter is required.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link ExpressSyncProps#getBucketPrefix}
         * @param bucketPrefix Property bucketPrefix: The prefix of the OSS bucket.
         * @return {@code this}
         */
        public Builder bucketPrefix(java.lang.String bucketPrefix) {
            this.bucketPrefix = bucketPrefix;
            return this;
        }

        /**
         * Sets the value of {@link ExpressSyncProps#getBucketPrefix}
         * @param bucketPrefix Property bucketPrefix: The prefix of the OSS bucket.
         * @return {@code this}
         */
        public Builder bucketPrefix(com.aliyun.ros.cdk.core.IResolvable bucketPrefix) {
            this.bucketPrefix = bucketPrefix;
            return this;
        }

        /**
         * Sets the value of {@link ExpressSyncProps#getDescription}
         * @param description Property description: The description of the ExpressSync.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link ExpressSyncProps#getDescription}
         * @param description Property description: The description of the ExpressSync.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ExpressSyncProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ExpressSyncProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ExpressSyncProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ExpressSyncProps {
        private final java.lang.Object bucketName;
        private final java.lang.Object bucketRegion;
        private final java.lang.Object name;
        private final java.lang.Object bucketPrefix;
        private final java.lang.Object description;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.bucketName = software.amazon.jsii.Kernel.get(this, "bucketName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.bucketRegion = software.amazon.jsii.Kernel.get(this, "bucketRegion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.bucketPrefix = software.amazon.jsii.Kernel.get(this, "bucketPrefix", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.bucketName = java.util.Objects.requireNonNull(builder.bucketName, "bucketName is required");
            this.bucketRegion = java.util.Objects.requireNonNull(builder.bucketRegion, "bucketRegion is required");
            this.name = java.util.Objects.requireNonNull(builder.name, "name is required");
            this.bucketPrefix = builder.bucketPrefix;
            this.description = builder.description;
        }

        @Override
        public final java.lang.Object getBucketName() {
            return this.bucketName;
        }

        @Override
        public final java.lang.Object getBucketRegion() {
            return this.bucketRegion;
        }

        @Override
        public final java.lang.Object getName() {
            return this.name;
        }

        @Override
        public final java.lang.Object getBucketPrefix() {
            return this.bucketPrefix;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("bucketName", om.valueToTree(this.getBucketName()));
            data.set("bucketRegion", om.valueToTree(this.getBucketRegion()));
            data.set("name", om.valueToTree(this.getName()));
            if (this.getBucketPrefix() != null) {
                data.set("bucketPrefix", om.valueToTree(this.getBucketPrefix()));
            }
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cloudstoragegateway.ExpressSyncProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ExpressSyncProps.Jsii$Proxy that = (ExpressSyncProps.Jsii$Proxy) o;

            if (!bucketName.equals(that.bucketName)) return false;
            if (!bucketRegion.equals(that.bucketRegion)) return false;
            if (!name.equals(that.name)) return false;
            if (this.bucketPrefix != null ? !this.bucketPrefix.equals(that.bucketPrefix) : that.bucketPrefix != null) return false;
            return this.description != null ? this.description.equals(that.description) : that.description == null;
        }

        @Override
        public final int hashCode() {
            int result = this.bucketName.hashCode();
            result = 31 * result + (this.bucketRegion.hashCode());
            result = 31 * result + (this.name.hashCode());
            result = 31 * result + (this.bucketPrefix != null ? this.bucketPrefix.hashCode() : 0);
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            return result;
        }
    }
}
