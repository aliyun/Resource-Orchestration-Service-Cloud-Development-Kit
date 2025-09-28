package com.aliyun.ros.cdk.core;

/**
 * Construction properties for {@link Resource}.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:20.257Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.ResourceProps")
@software.amazon.jsii.Jsii.Proxy(ResourceProps.Jsii$Proxy.class)
public interface ResourceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * The Alibaba Cloud account ID this resource belongs to.
     * <p>
     * Default: - the resource is in the same account as the stack it belongs to
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getAccount() {
        return null;
    }

    /**
     * ARN to deduce region and account from.
     * <p>
     * The ARN is parsed and the account and region are taken from the ARN.
     * This should be used for imported resources.
     * <p>
     * Cannot be supplied together with either <code>account</code> or <code>region</code>.
     * <p>
     * Default: - take environment from `account`, `region` parameters, or use Stack environment.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnvironmentFromArn() {
        return null;
    }

    /**
     * The value passed in by users to the physical name prop of the resource.
     * <p>
     * <ul>
     * <li><code>undefined</code> implies that a physical name will be allocated during deployment.</li>
     * <li>a concrete value implies a specific physical name</li>
     * <li><code>PhysicalName.GENERATE_IF_NEEDED</code> is a marker that indicates that a physical will only be generated
     * by the CDK if it is needed for cross-environment references. Otherwise, it will be allocated.</li>
     * </ul>
     * <p>
     * Default: - The physical name will be allocated at deployment time
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getPhysicalName() {
        return null;
    }

    /**
     * The Alibaba Cloud region this resource belongs to.
     * <p>
     * Default: - the resource is in the same region as the stack it belongs to
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getRegion() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link ResourceProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ResourceProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ResourceProps> {
        java.lang.String account;
        java.lang.Object environmentFromArn;
        java.lang.String physicalName;
        java.lang.String region;

        /**
         * Sets the value of {@link ResourceProps#getAccount}
         * @param account The Alibaba Cloud account ID this resource belongs to.
         * @return {@code this}
         */
        public Builder account(java.lang.String account) {
            this.account = account;
            return this;
        }

        /**
         * Sets the value of {@link ResourceProps#getEnvironmentFromArn}
         * @param environmentFromArn ARN to deduce region and account from.
         *                           The ARN is parsed and the account and region are taken from the ARN.
         *                           This should be used for imported resources.
         *                           <p>
         *                           Cannot be supplied together with either <code>account</code> or <code>region</code>.
         * @return {@code this}
         */
        public Builder environmentFromArn(java.lang.String environmentFromArn) {
            this.environmentFromArn = environmentFromArn;
            return this;
        }

        /**
         * Sets the value of {@link ResourceProps#getEnvironmentFromArn}
         * @param environmentFromArn ARN to deduce region and account from.
         *                           The ARN is parsed and the account and region are taken from the ARN.
         *                           This should be used for imported resources.
         *                           <p>
         *                           Cannot be supplied together with either <code>account</code> or <code>region</code>.
         * @return {@code this}
         */
        public Builder environmentFromArn(com.aliyun.ros.cdk.core.IResolvable environmentFromArn) {
            this.environmentFromArn = environmentFromArn;
            return this;
        }

        /**
         * Sets the value of {@link ResourceProps#getPhysicalName}
         * @param physicalName The value passed in by users to the physical name prop of the resource.
         *                     <ul>
         *                     <li><code>undefined</code> implies that a physical name will be allocated during deployment.</li>
         *                     <li>a concrete value implies a specific physical name</li>
         *                     <li><code>PhysicalName.GENERATE_IF_NEEDED</code> is a marker that indicates that a physical will only be generated
         *                     by the CDK if it is needed for cross-environment references. Otherwise, it will be allocated.</li>
         *                     </ul>
         * @return {@code this}
         */
        public Builder physicalName(java.lang.String physicalName) {
            this.physicalName = physicalName;
            return this;
        }

        /**
         * Sets the value of {@link ResourceProps#getRegion}
         * @param region The Alibaba Cloud region this resource belongs to.
         * @return {@code this}
         */
        public Builder region(java.lang.String region) {
            this.region = region;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ResourceProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ResourceProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ResourceProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ResourceProps {
        private final java.lang.String account;
        private final java.lang.Object environmentFromArn;
        private final java.lang.String physicalName;
        private final java.lang.String region;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.account = software.amazon.jsii.Kernel.get(this, "account", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.environmentFromArn = software.amazon.jsii.Kernel.get(this, "environmentFromArn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.physicalName = software.amazon.jsii.Kernel.get(this, "physicalName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.region = software.amazon.jsii.Kernel.get(this, "region", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.account = builder.account;
            this.environmentFromArn = builder.environmentFromArn;
            this.physicalName = builder.physicalName;
            this.region = builder.region;
        }

        @Override
        public final java.lang.String getAccount() {
            return this.account;
        }

        @Override
        public final java.lang.Object getEnvironmentFromArn() {
            return this.environmentFromArn;
        }

        @Override
        public final java.lang.String getPhysicalName() {
            return this.physicalName;
        }

        @Override
        public final java.lang.String getRegion() {
            return this.region;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getAccount() != null) {
                data.set("account", om.valueToTree(this.getAccount()));
            }
            if (this.getEnvironmentFromArn() != null) {
                data.set("environmentFromArn", om.valueToTree(this.getEnvironmentFromArn()));
            }
            if (this.getPhysicalName() != null) {
                data.set("physicalName", om.valueToTree(this.getPhysicalName()));
            }
            if (this.getRegion() != null) {
                data.set("region", om.valueToTree(this.getRegion()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-core.ResourceProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ResourceProps.Jsii$Proxy that = (ResourceProps.Jsii$Proxy) o;

            if (this.account != null ? !this.account.equals(that.account) : that.account != null) return false;
            if (this.environmentFromArn != null ? !this.environmentFromArn.equals(that.environmentFromArn) : that.environmentFromArn != null) return false;
            if (this.physicalName != null ? !this.physicalName.equals(that.physicalName) : that.physicalName != null) return false;
            return this.region != null ? this.region.equals(that.region) : that.region == null;
        }

        @Override
        public final int hashCode() {
            int result = this.account != null ? this.account.hashCode() : 0;
            result = 31 * result + (this.environmentFromArn != null ? this.environmentFromArn.hashCode() : 0);
            result = 31 * result + (this.physicalName != null ? this.physicalName.hashCode() : 0);
            result = 31 * result + (this.region != null ? this.region.hashCode() : 0);
            return result;
        }
    }
}
