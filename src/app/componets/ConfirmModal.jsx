"use client"
import React from 'react';
import Link from 'next/link';

const ConfirmModal = ({ isOpen, onClose, onConfirm, onOrder, product }) => {
    if (!isOpen) return null;
    return (
        <div className="modal-backdrop fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="modal-content bg-white p-5 rounded shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Attention</h2>
                <p>Are you sure you want to Buy this {product.name}?</p>
                <div className="modal-details my-4">
                    <p><strong>Price:</strong> {product.price}</p>
                    <p><strong>Description:</strong> {product.description}</p>
                </div>
          <div className="modal-actions flex justify-center space-x-3">
            <Link href="/users/add">
                    <button
                        onClick={onOrder}
                        className="order-button bg-black text-white px-10 py-2 rounded"
                    >
                        Order
              </button>
              </Link>

            <br />
                    <button
                        onClick={onClose}
                        className="cancel-button bg-gray-300 px-4 py-2 rounded"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmModal;
