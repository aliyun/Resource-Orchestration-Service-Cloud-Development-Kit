package com.aliyun.ros.cdk.threatdetection;

/**
 * Properties for defining a <code>AttackPathWhitelist</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-attackpathwhitelist
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:54.587Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.threatdetection.$Module.class, fqn = "@alicloud/ros-cdk-threatdetection.AttackPathWhitelistProps")
@software.amazon.jsii.Jsii.Proxy(AttackPathWhitelistProps.Jsii$Proxy.class)
public interface AttackPathWhitelistProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property pathName: The whitelist path name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPathName();

    /**
     * Property pathType: The whitelist path type.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPathType();

    /**
     * Property whitelistName: The whitelist name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getWhitelistName();

    /**
     * Property whitelistType: The whitelist type.
     * <p>
     * Values:
     * <p>
     * <ul>
     * <li>ALL_ASSET: All assets.</li>
     * <li>PART_ASSET: Partial assets.</li>
     * </ul>
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getWhitelistType();

    /**
     * Property attackPathAssetList: List of attack path assets.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAttackPathAssetList() {
        return null;
    }

    /**
     * Property remark: Remark information.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRemark() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link AttackPathWhitelistProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link AttackPathWhitelistProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<AttackPathWhitelistProps> {
        java.lang.Object pathName;
        java.lang.Object pathType;
        java.lang.Object whitelistName;
        java.lang.Object whitelistType;
        java.lang.Object attackPathAssetList;
        java.lang.Object remark;

        /**
         * Sets the value of {@link AttackPathWhitelistProps#getPathName}
         * @param pathName Property pathName: The whitelist path name. This parameter is required.
         * @return {@code this}
         */
        public Builder pathName(java.lang.String pathName) {
            this.pathName = pathName;
            return this;
        }

        /**
         * Sets the value of {@link AttackPathWhitelistProps#getPathName}
         * @param pathName Property pathName: The whitelist path name. This parameter is required.
         * @return {@code this}
         */
        public Builder pathName(com.aliyun.ros.cdk.core.IResolvable pathName) {
            this.pathName = pathName;
            return this;
        }

        /**
         * Sets the value of {@link AttackPathWhitelistProps#getPathType}
         * @param pathType Property pathType: The whitelist path type. This parameter is required.
         * @return {@code this}
         */
        public Builder pathType(java.lang.String pathType) {
            this.pathType = pathType;
            return this;
        }

        /**
         * Sets the value of {@link AttackPathWhitelistProps#getPathType}
         * @param pathType Property pathType: The whitelist path type. This parameter is required.
         * @return {@code this}
         */
        public Builder pathType(com.aliyun.ros.cdk.core.IResolvable pathType) {
            this.pathType = pathType;
            return this;
        }

        /**
         * Sets the value of {@link AttackPathWhitelistProps#getWhitelistName}
         * @param whitelistName Property whitelistName: The whitelist name. This parameter is required.
         * @return {@code this}
         */
        public Builder whitelistName(java.lang.String whitelistName) {
            this.whitelistName = whitelistName;
            return this;
        }

        /**
         * Sets the value of {@link AttackPathWhitelistProps#getWhitelistName}
         * @param whitelistName Property whitelistName: The whitelist name. This parameter is required.
         * @return {@code this}
         */
        public Builder whitelistName(com.aliyun.ros.cdk.core.IResolvable whitelistName) {
            this.whitelistName = whitelistName;
            return this;
        }

        /**
         * Sets the value of {@link AttackPathWhitelistProps#getWhitelistType}
         * @param whitelistType Property whitelistType: The whitelist type. This parameter is required.
         *                      Values:
         *                      <p>
         *                      <ul>
         *                      <li>ALL_ASSET: All assets.</li>
         *                      <li>PART_ASSET: Partial assets.</li>
         *                      </ul>
         * @return {@code this}
         */
        public Builder whitelistType(java.lang.String whitelistType) {
            this.whitelistType = whitelistType;
            return this;
        }

        /**
         * Sets the value of {@link AttackPathWhitelistProps#getWhitelistType}
         * @param whitelistType Property whitelistType: The whitelist type. This parameter is required.
         *                      Values:
         *                      <p>
         *                      <ul>
         *                      <li>ALL_ASSET: All assets.</li>
         *                      <li>PART_ASSET: Partial assets.</li>
         *                      </ul>
         * @return {@code this}
         */
        public Builder whitelistType(com.aliyun.ros.cdk.core.IResolvable whitelistType) {
            this.whitelistType = whitelistType;
            return this;
        }

        /**
         * Sets the value of {@link AttackPathWhitelistProps#getAttackPathAssetList}
         * @param attackPathAssetList Property attackPathAssetList: List of attack path assets.
         * @return {@code this}
         */
        public Builder attackPathAssetList(com.aliyun.ros.cdk.core.IResolvable attackPathAssetList) {
            this.attackPathAssetList = attackPathAssetList;
            return this;
        }

        /**
         * Sets the value of {@link AttackPathWhitelistProps#getAttackPathAssetList}
         * @param attackPathAssetList Property attackPathAssetList: List of attack path assets.
         * @return {@code this}
         */
        public Builder attackPathAssetList(java.util.List<? extends java.lang.Object> attackPathAssetList) {
            this.attackPathAssetList = attackPathAssetList;
            return this;
        }

        /**
         * Sets the value of {@link AttackPathWhitelistProps#getRemark}
         * @param remark Property remark: Remark information.
         * @return {@code this}
         */
        public Builder remark(java.lang.String remark) {
            this.remark = remark;
            return this;
        }

        /**
         * Sets the value of {@link AttackPathWhitelistProps#getRemark}
         * @param remark Property remark: Remark information.
         * @return {@code this}
         */
        public Builder remark(com.aliyun.ros.cdk.core.IResolvable remark) {
            this.remark = remark;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link AttackPathWhitelistProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public AttackPathWhitelistProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link AttackPathWhitelistProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AttackPathWhitelistProps {
        private final java.lang.Object pathName;
        private final java.lang.Object pathType;
        private final java.lang.Object whitelistName;
        private final java.lang.Object whitelistType;
        private final java.lang.Object attackPathAssetList;
        private final java.lang.Object remark;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.pathName = software.amazon.jsii.Kernel.get(this, "pathName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.pathType = software.amazon.jsii.Kernel.get(this, "pathType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.whitelistName = software.amazon.jsii.Kernel.get(this, "whitelistName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.whitelistType = software.amazon.jsii.Kernel.get(this, "whitelistType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.attackPathAssetList = software.amazon.jsii.Kernel.get(this, "attackPathAssetList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.remark = software.amazon.jsii.Kernel.get(this, "remark", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.pathName = java.util.Objects.requireNonNull(builder.pathName, "pathName is required");
            this.pathType = java.util.Objects.requireNonNull(builder.pathType, "pathType is required");
            this.whitelistName = java.util.Objects.requireNonNull(builder.whitelistName, "whitelistName is required");
            this.whitelistType = java.util.Objects.requireNonNull(builder.whitelistType, "whitelistType is required");
            this.attackPathAssetList = builder.attackPathAssetList;
            this.remark = builder.remark;
        }

        @Override
        public final java.lang.Object getPathName() {
            return this.pathName;
        }

        @Override
        public final java.lang.Object getPathType() {
            return this.pathType;
        }

        @Override
        public final java.lang.Object getWhitelistName() {
            return this.whitelistName;
        }

        @Override
        public final java.lang.Object getWhitelistType() {
            return this.whitelistType;
        }

        @Override
        public final java.lang.Object getAttackPathAssetList() {
            return this.attackPathAssetList;
        }

        @Override
        public final java.lang.Object getRemark() {
            return this.remark;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("pathName", om.valueToTree(this.getPathName()));
            data.set("pathType", om.valueToTree(this.getPathType()));
            data.set("whitelistName", om.valueToTree(this.getWhitelistName()));
            data.set("whitelistType", om.valueToTree(this.getWhitelistType()));
            if (this.getAttackPathAssetList() != null) {
                data.set("attackPathAssetList", om.valueToTree(this.getAttackPathAssetList()));
            }
            if (this.getRemark() != null) {
                data.set("remark", om.valueToTree(this.getRemark()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-threatdetection.AttackPathWhitelistProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            AttackPathWhitelistProps.Jsii$Proxy that = (AttackPathWhitelistProps.Jsii$Proxy) o;

            if (!pathName.equals(that.pathName)) return false;
            if (!pathType.equals(that.pathType)) return false;
            if (!whitelistName.equals(that.whitelistName)) return false;
            if (!whitelistType.equals(that.whitelistType)) return false;
            if (this.attackPathAssetList != null ? !this.attackPathAssetList.equals(that.attackPathAssetList) : that.attackPathAssetList != null) return false;
            return this.remark != null ? this.remark.equals(that.remark) : that.remark == null;
        }

        @Override
        public final int hashCode() {
            int result = this.pathName.hashCode();
            result = 31 * result + (this.pathType.hashCode());
            result = 31 * result + (this.whitelistName.hashCode());
            result = 31 * result + (this.whitelistType.hashCode());
            result = 31 * result + (this.attackPathAssetList != null ? this.attackPathAssetList.hashCode() : 0);
            result = 31 * result + (this.remark != null ? this.remark.hashCode() : 0);
            return result;
        }
    }
}
