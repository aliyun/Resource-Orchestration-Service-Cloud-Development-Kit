package com.aliyun.ros.cdk.maxcompute;

/**
 * Properties for defining a <code>RosPackage</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-maxcompute-package
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:07.949Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.maxcompute.$Module.class, fqn = "@alicloud/ros-cdk-maxcompute.RosPackageProps")
@software.amazon.jsii.Jsii.Proxy(RosPackageProps.Jsii$Proxy.class)
public interface RosPackageProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPackageName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getProjectName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAcl() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosPackageProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosPackageProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosPackageProps> {
        java.lang.Object packageName;
        java.lang.Object projectName;
        java.lang.Object acl;

        /**
         * Sets the value of {@link RosPackageProps#getPackageName}
         * @param packageName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder packageName(java.lang.String packageName) {
            this.packageName = packageName;
            return this;
        }

        /**
         * Sets the value of {@link RosPackageProps#getPackageName}
         * @param packageName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder packageName(com.aliyun.ros.cdk.core.IResolvable packageName) {
            this.packageName = packageName;
            return this;
        }

        /**
         * Sets the value of {@link RosPackageProps#getProjectName}
         * @param projectName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder projectName(java.lang.String projectName) {
            this.projectName = projectName;
            return this;
        }

        /**
         * Sets the value of {@link RosPackageProps#getProjectName}
         * @param projectName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder projectName(com.aliyun.ros.cdk.core.IResolvable projectName) {
            this.projectName = projectName;
            return this;
        }

        /**
         * Sets the value of {@link RosPackageProps#getAcl}
         * @param acl the value to be set.
         * @return {@code this}
         */
        public Builder acl(com.aliyun.ros.cdk.core.IResolvable acl) {
            this.acl = acl;
            return this;
        }

        /**
         * Sets the value of {@link RosPackageProps#getAcl}
         * @param acl the value to be set.
         * @return {@code this}
         */
        public Builder acl(com.aliyun.ros.cdk.maxcompute.RosPackage.AclProperty acl) {
            this.acl = acl;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosPackageProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosPackageProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosPackageProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosPackageProps {
        private final java.lang.Object packageName;
        private final java.lang.Object projectName;
        private final java.lang.Object acl;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.packageName = software.amazon.jsii.Kernel.get(this, "packageName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.projectName = software.amazon.jsii.Kernel.get(this, "projectName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.acl = software.amazon.jsii.Kernel.get(this, "acl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.packageName = java.util.Objects.requireNonNull(builder.packageName, "packageName is required");
            this.projectName = java.util.Objects.requireNonNull(builder.projectName, "projectName is required");
            this.acl = builder.acl;
        }

        @Override
        public final java.lang.Object getPackageName() {
            return this.packageName;
        }

        @Override
        public final java.lang.Object getProjectName() {
            return this.projectName;
        }

        @Override
        public final java.lang.Object getAcl() {
            return this.acl;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("packageName", om.valueToTree(this.getPackageName()));
            data.set("projectName", om.valueToTree(this.getProjectName()));
            if (this.getAcl() != null) {
                data.set("acl", om.valueToTree(this.getAcl()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-maxcompute.RosPackageProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosPackageProps.Jsii$Proxy that = (RosPackageProps.Jsii$Proxy) o;

            if (!packageName.equals(that.packageName)) return false;
            if (!projectName.equals(that.projectName)) return false;
            return this.acl != null ? this.acl.equals(that.acl) : that.acl == null;
        }

        @Override
        public final int hashCode() {
            int result = this.packageName.hashCode();
            result = 31 * result + (this.projectName.hashCode());
            result = 31 * result + (this.acl != null ? this.acl.hashCode() : 0);
            return result;
        }
    }
}
