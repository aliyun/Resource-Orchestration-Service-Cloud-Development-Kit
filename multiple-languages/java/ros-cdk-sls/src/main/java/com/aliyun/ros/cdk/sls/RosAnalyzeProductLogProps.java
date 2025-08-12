package com.aliyun.ros.cdk.sls;

/**
 * Properties for defining a <code>RosAnalyzeProductLog</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-analyzeproductlog
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:50.905Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sls.$Module.class, fqn = "@alicloud/ros-cdk-sls.RosAnalyzeProductLogProps")
@software.amazon.jsii.Jsii.Proxy(RosAnalyzeProductLogProps.Jsii$Proxy.class)
public interface RosAnalyzeProductLogProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCloudProduct();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getLogstore();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getProject();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getOverwrite() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosAnalyzeProductLogProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosAnalyzeProductLogProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosAnalyzeProductLogProps> {
        java.lang.Object cloudProduct;
        java.lang.Object logstore;
        java.lang.Object project;
        java.lang.Object overwrite;

        /**
         * Sets the value of {@link RosAnalyzeProductLogProps#getCloudProduct}
         * @param cloudProduct the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder cloudProduct(java.lang.String cloudProduct) {
            this.cloudProduct = cloudProduct;
            return this;
        }

        /**
         * Sets the value of {@link RosAnalyzeProductLogProps#getCloudProduct}
         * @param cloudProduct the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder cloudProduct(com.aliyun.ros.cdk.core.IResolvable cloudProduct) {
            this.cloudProduct = cloudProduct;
            return this;
        }

        /**
         * Sets the value of {@link RosAnalyzeProductLogProps#getLogstore}
         * @param logstore the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder logstore(java.lang.String logstore) {
            this.logstore = logstore;
            return this;
        }

        /**
         * Sets the value of {@link RosAnalyzeProductLogProps#getLogstore}
         * @param logstore the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder logstore(com.aliyun.ros.cdk.core.IResolvable logstore) {
            this.logstore = logstore;
            return this;
        }

        /**
         * Sets the value of {@link RosAnalyzeProductLogProps#getProject}
         * @param project the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder project(java.lang.String project) {
            this.project = project;
            return this;
        }

        /**
         * Sets the value of {@link RosAnalyzeProductLogProps#getProject}
         * @param project the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder project(com.aliyun.ros.cdk.core.IResolvable project) {
            this.project = project;
            return this;
        }

        /**
         * Sets the value of {@link RosAnalyzeProductLogProps#getOverwrite}
         * @param overwrite the value to be set.
         * @return {@code this}
         */
        public Builder overwrite(java.lang.Boolean overwrite) {
            this.overwrite = overwrite;
            return this;
        }

        /**
         * Sets the value of {@link RosAnalyzeProductLogProps#getOverwrite}
         * @param overwrite the value to be set.
         * @return {@code this}
         */
        public Builder overwrite(com.aliyun.ros.cdk.core.IResolvable overwrite) {
            this.overwrite = overwrite;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosAnalyzeProductLogProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosAnalyzeProductLogProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosAnalyzeProductLogProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosAnalyzeProductLogProps {
        private final java.lang.Object cloudProduct;
        private final java.lang.Object logstore;
        private final java.lang.Object project;
        private final java.lang.Object overwrite;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.cloudProduct = software.amazon.jsii.Kernel.get(this, "cloudProduct", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.logstore = software.amazon.jsii.Kernel.get(this, "logstore", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.project = software.amazon.jsii.Kernel.get(this, "project", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.overwrite = software.amazon.jsii.Kernel.get(this, "overwrite", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.cloudProduct = java.util.Objects.requireNonNull(builder.cloudProduct, "cloudProduct is required");
            this.logstore = java.util.Objects.requireNonNull(builder.logstore, "logstore is required");
            this.project = java.util.Objects.requireNonNull(builder.project, "project is required");
            this.overwrite = builder.overwrite;
        }

        @Override
        public final java.lang.Object getCloudProduct() {
            return this.cloudProduct;
        }

        @Override
        public final java.lang.Object getLogstore() {
            return this.logstore;
        }

        @Override
        public final java.lang.Object getProject() {
            return this.project;
        }

        @Override
        public final java.lang.Object getOverwrite() {
            return this.overwrite;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("cloudProduct", om.valueToTree(this.getCloudProduct()));
            data.set("logstore", om.valueToTree(this.getLogstore()));
            data.set("project", om.valueToTree(this.getProject()));
            if (this.getOverwrite() != null) {
                data.set("overwrite", om.valueToTree(this.getOverwrite()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-sls.RosAnalyzeProductLogProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosAnalyzeProductLogProps.Jsii$Proxy that = (RosAnalyzeProductLogProps.Jsii$Proxy) o;

            if (!cloudProduct.equals(that.cloudProduct)) return false;
            if (!logstore.equals(that.logstore)) return false;
            if (!project.equals(that.project)) return false;
            return this.overwrite != null ? this.overwrite.equals(that.overwrite) : that.overwrite == null;
        }

        @Override
        public final int hashCode() {
            int result = this.cloudProduct.hashCode();
            result = 31 * result + (this.logstore.hashCode());
            result = 31 * result + (this.project.hashCode());
            result = 31 * result + (this.overwrite != null ? this.overwrite.hashCode() : 0);
            return result;
        }
    }
}
