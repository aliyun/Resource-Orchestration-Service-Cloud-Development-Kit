package com.aliyun.ros.cdk.core;

@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:00.602Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.ArnComponents")
@software.amazon.jsii.Jsii.Proxy(ArnComponents.Jsii$Proxy.class)
public interface ArnComponents extends software.amazon.jsii.JsiiSerializable {

    /**
     * Resource type (e.g. "instance", "functions", "role"). For some resource types, e.g. OSS buckets, this field defines the bucket name.
     */
    @org.jetbrains.annotations.NotNull java.lang.String getResource();

    /**
     * The service namespace that identifies the ACS product (for example, 'ecs', 'fc', 'ram').
     */
    @org.jetbrains.annotations.NotNull java.lang.String getService();

    /**
     * The ID of the ACS account that owns the resource, without the hyphens.
     * <p>
     * For example, 123456789012. Note that the ARNs for some resources don't
     * require an account number, so this component might be omitted.
     * <p>
     * Default: The account the stack is deployed to.
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getAccount() {
        return null;
    }

    /**
     * The specific ARN format to use for this ARN value.
     * <p>
     * Default: - uses value of `sep` as the separator for formatting,
     * `ArnFormat.SLASH_RESOURCE_NAME` if that property was also not provided
     */
    default @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.ArnFormat getArnFormat() {
        return null;
    }

    /**
     * The partition that the resource is in.
     * <p>
     * Default: acs
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getPartition() {
        return null;
    }

    /**
     * The region the resource resides in.
     * <p>
     * Note that the ARNs for some resources
     * do not require a region, so this component might be omitted.
     * <p>
     * Default: The region the stack is deployed to.
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getRegion() {
        return null;
    }

    /**
     * Resource name or path within the resource (i.e. OSS bucket object key) or a wildcard such as <code>"*"</code>. This is service-dependent.
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getResourceName() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link ArnComponents}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ArnComponents}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ArnComponents> {
        java.lang.String resource;
        java.lang.String service;
        java.lang.String account;
        com.aliyun.ros.cdk.core.ArnFormat arnFormat;
        java.lang.String partition;
        java.lang.String region;
        java.lang.String resourceName;

        /**
         * Sets the value of {@link ArnComponents#getResource}
         * @param resource Resource type (e.g. "instance", "functions", "role"). For some resource types, e.g. OSS buckets, this field defines the bucket name. This parameter is required.
         * @return {@code this}
         */
        public Builder resource(java.lang.String resource) {
            this.resource = resource;
            return this;
        }

        /**
         * Sets the value of {@link ArnComponents#getService}
         * @param service The service namespace that identifies the ACS product (for example, 'ecs', 'fc', 'ram'). This parameter is required.
         * @return {@code this}
         */
        public Builder service(java.lang.String service) {
            this.service = service;
            return this;
        }

        /**
         * Sets the value of {@link ArnComponents#getAccount}
         * @param account The ID of the ACS account that owns the resource, without the hyphens.
         *                For example, 123456789012. Note that the ARNs for some resources don't
         *                require an account number, so this component might be omitted.
         * @return {@code this}
         */
        public Builder account(java.lang.String account) {
            this.account = account;
            return this;
        }

        /**
         * Sets the value of {@link ArnComponents#getArnFormat}
         * @param arnFormat The specific ARN format to use for this ARN value.
         * @return {@code this}
         */
        public Builder arnFormat(com.aliyun.ros.cdk.core.ArnFormat arnFormat) {
            this.arnFormat = arnFormat;
            return this;
        }

        /**
         * Sets the value of {@link ArnComponents#getPartition}
         * @param partition The partition that the resource is in.
         * @return {@code this}
         */
        public Builder partition(java.lang.String partition) {
            this.partition = partition;
            return this;
        }

        /**
         * Sets the value of {@link ArnComponents#getRegion}
         * @param region The region the resource resides in.
         *               Note that the ARNs for some resources
         *               do not require a region, so this component might be omitted.
         * @return {@code this}
         */
        public Builder region(java.lang.String region) {
            this.region = region;
            return this;
        }

        /**
         * Sets the value of {@link ArnComponents#getResourceName}
         * @param resourceName Resource name or path within the resource (i.e. OSS bucket object key) or a wildcard such as <code>"*"</code>. This is service-dependent.
         * @return {@code this}
         */
        public Builder resourceName(java.lang.String resourceName) {
            this.resourceName = resourceName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ArnComponents}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ArnComponents build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ArnComponents}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ArnComponents {
        private final java.lang.String resource;
        private final java.lang.String service;
        private final java.lang.String account;
        private final com.aliyun.ros.cdk.core.ArnFormat arnFormat;
        private final java.lang.String partition;
        private final java.lang.String region;
        private final java.lang.String resourceName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.resource = software.amazon.jsii.Kernel.get(this, "resource", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.service = software.amazon.jsii.Kernel.get(this, "service", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.account = software.amazon.jsii.Kernel.get(this, "account", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.arnFormat = software.amazon.jsii.Kernel.get(this, "arnFormat", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.ArnFormat.class));
            this.partition = software.amazon.jsii.Kernel.get(this, "partition", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.region = software.amazon.jsii.Kernel.get(this, "region", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.resourceName = software.amazon.jsii.Kernel.get(this, "resourceName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.resource = java.util.Objects.requireNonNull(builder.resource, "resource is required");
            this.service = java.util.Objects.requireNonNull(builder.service, "service is required");
            this.account = builder.account;
            this.arnFormat = builder.arnFormat;
            this.partition = builder.partition;
            this.region = builder.region;
            this.resourceName = builder.resourceName;
        }

        @Override
        public final java.lang.String getResource() {
            return this.resource;
        }

        @Override
        public final java.lang.String getService() {
            return this.service;
        }

        @Override
        public final java.lang.String getAccount() {
            return this.account;
        }

        @Override
        public final com.aliyun.ros.cdk.core.ArnFormat getArnFormat() {
            return this.arnFormat;
        }

        @Override
        public final java.lang.String getPartition() {
            return this.partition;
        }

        @Override
        public final java.lang.String getRegion() {
            return this.region;
        }

        @Override
        public final java.lang.String getResourceName() {
            return this.resourceName;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("resource", om.valueToTree(this.getResource()));
            data.set("service", om.valueToTree(this.getService()));
            if (this.getAccount() != null) {
                data.set("account", om.valueToTree(this.getAccount()));
            }
            if (this.getArnFormat() != null) {
                data.set("arnFormat", om.valueToTree(this.getArnFormat()));
            }
            if (this.getPartition() != null) {
                data.set("partition", om.valueToTree(this.getPartition()));
            }
            if (this.getRegion() != null) {
                data.set("region", om.valueToTree(this.getRegion()));
            }
            if (this.getResourceName() != null) {
                data.set("resourceName", om.valueToTree(this.getResourceName()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-core.ArnComponents"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ArnComponents.Jsii$Proxy that = (ArnComponents.Jsii$Proxy) o;

            if (!resource.equals(that.resource)) return false;
            if (!service.equals(that.service)) return false;
            if (this.account != null ? !this.account.equals(that.account) : that.account != null) return false;
            if (this.arnFormat != null ? !this.arnFormat.equals(that.arnFormat) : that.arnFormat != null) return false;
            if (this.partition != null ? !this.partition.equals(that.partition) : that.partition != null) return false;
            if (this.region != null ? !this.region.equals(that.region) : that.region != null) return false;
            return this.resourceName != null ? this.resourceName.equals(that.resourceName) : that.resourceName == null;
        }

        @Override
        public final int hashCode() {
            int result = this.resource.hashCode();
            result = 31 * result + (this.service.hashCode());
            result = 31 * result + (this.account != null ? this.account.hashCode() : 0);
            result = 31 * result + (this.arnFormat != null ? this.arnFormat.hashCode() : 0);
            result = 31 * result + (this.partition != null ? this.partition.hashCode() : 0);
            result = 31 * result + (this.region != null ? this.region.hashCode() : 0);
            result = 31 * result + (this.resourceName != null ? this.resourceName.hashCode() : 0);
            return result;
        }
    }
}
